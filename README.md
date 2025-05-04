# Deploying Node.js App on EC2 (Ubuntu)

## 1. Create an EC2 Instance
- Create an EC2 instance using the **Ubuntu** AMI.

## 2. Connect to the EC2 Instance Using SSH
- Copy the code and run it in the terminal:

```bash
ssh -i <your-key.pem> ubuntu@<public-ip>
```

## 3. Clone the Repository

Once connected, use the following command to clone the repo:

```bash
git clone https://github.com/Koffi-exe/AWS-server.git
```

## 4. Add the `.env` File to EC2 Using SCP

From your local machine, run:

```bash
scp -i <pem-key.pem> .env ubuntu@<public-ip>:/home/ubuntu/your_app
```

Verify that the file was uploaded:

```bash
ls -a
```

## 5. Install Node.js and npm in EC2

```bash
sudo apt update
sudo apt install nodejs npm -y
```

Verify installation:

```bash
node -v
npm -v
```

## 6. Install App Dependencies

Navigate to your app directory and install dependencies:

```bash
cd your_app
npm install
```

## 7. Start the Server Using PM2

```bash
sudo npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save
```

## 8. Configure Security Group

- Allow port **3000** as a **Custom TCP Rule** in your EC2 Security Group.
- Access the app at: `http://<public-ip>:3000`

## 9. Useful PM2 Commands

```bash
pm2 logs
pm2 start server
pm2 stop server
pm2 restart server
```
