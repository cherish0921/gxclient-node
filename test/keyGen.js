import {GXClient} from "../lib";

let client = new GXClient();
let keypairs = client.generateKey();
console.log(keypairs, client.privateToPublic(keypairs.privateKey),client.isValidPrivate(keypairs.privateKey), client.isValidPublic(keypairs.publicKey));
