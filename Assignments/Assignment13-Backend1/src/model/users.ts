import { promises as fs } from "fs";
import { SignupInfo,LoginInfo } from "../interfaces/userInterface";
import * as bcrypt from "bcrypt";



// checks for the existence of the user in usersSimulateDB.json file
async function checkUser(email: string) {
  try {
    const jsonString = await fs.readFile("usersSimulateDB.json", "utf-8");
    const data = JSON.parse(jsonString);

    // uses data array to find the id element
    const user = data.find(
      (element: { email: string }) => element.email === email
    );
    return user || undefined;          // returns either user or undefined 
  } catch (err) {
    return err;
  }
}



export async function signup(result: SignupInfo) {
  try {
    const checkData = await checkUser(result.email);
    if (checkData !== undefined) return "User already exists";

    const jsonString = await fs.readFile("usersSimulateDB.json", "utf-8");
    let existingData = JSON.parse(jsonString); // Parse the existing JSON data

    const maxId = Math.max(
      ...existingData.map((user: { id: number }) => user.id),
      0
    );

    const hashedPassword = await bcrypt.hash(result.password, 10); // 10 cost factor

    const userData = {
      id: maxId + 1,
      username: result.username,
      email: result.email,
      password: hashedPassword,
    }; 

    existingData.push(userData);

    // Convert the updated data back to JSON format
    const updatedJson = JSON.stringify(existingData, null, 2); // null and 2 for formatting

    // Write the updated JSON data back to the file
    fs.writeFile("usersSimulateDB.json", updatedJson, "utf8");

    const user = { email: result.email, id: userData.id };

    return { result};
  } catch (err) {
    return "Internal server error";
  }
}



export async function login(result: LoginInfo) {
    try {
        const checkData = await checkUser(result.email);
        if (checkData === undefined) return ({message: "User doesn't exist"});
    
        const matchPassword = await bcrypt.compare(result.password, checkData.password);
        if(!matchPassword){
            return ({message: "Invalid Credentials"});
        }

        
      } catch (err) {
        return ({message: "Internal server error"});
      }
}
