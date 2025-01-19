const express = require('express');

const router = express.Router();




router.get("/", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>`;
    res.send(html);
});

router.route("/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
    })
    .patch((req, res) => {
        return res.json({ status: "Pending" });
    })
    .delete((req, res) => {
        return res.json({ status: "Pending" });
    });

router.post("/api/users",  async (req, res) => {  
    const body = req.body;
    
    if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title)
       return res.status(400).json({msg: "All fields are req..."})

    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: "failure", error: err.message });
        }
        return res.status(201).json({ status: "success", id: newUser.id });
    });
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    });

    console.log("result", result);
});
