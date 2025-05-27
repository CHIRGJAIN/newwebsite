const bcrypt = require("bcrypt");

async function hashPassword() {
    const hashedPassword = await bcrypt.hash("Admin123", 10);
    console.log("Hashed Admin Password:", hashedPassword);
}

hashPassword();
