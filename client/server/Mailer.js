
user=process.env.USER
pass=process.env.PASS

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: user,
        pass: password
    }
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("ready to send");
    }
});