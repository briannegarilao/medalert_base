# MedAlert 🚑💊

MedAlert is a web application designed to help users manage their medication schedules effectively. It allows users to set reminders for their medications and enables guardians to monitor and assist with adherence to these schedules.

## Features ✨

- **User Accounts**: Users can create accounts to manage their medication schedules.
- **Guardian Access**: Guardians can create accounts to monitor and remind users about their medication schedules.
- **Medication Management**: Users can add, edit, and delete their medications along with details such as dosage and frequency.
- **Reminders**: Users and guardians receive notifications for medication schedules.
- **Medication History Tracker**: Users can view their medication history and logs.

## Tech Stack 🛠️

- **Frontend**: Next.js, TypeScript, React
- **Backend**: Firebase (Firestore, Authentication, Analytics)

## Prerequisites ✅

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm or yarn

## Getting Started 🚀

Follow these instructions to set up the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/medalert.git
cd medalert
```

### 2. Install Dependencies

Navigate to the `frontend` directory and install the required packages:

```bash
cd frontend
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the `frontend` directory and add your Firebase configuration:

```plaintext
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDC1A_-BRz3fZQcXt2mXwqZ3Z38QS5OUeU
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=medalert-1db99.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://medalert-1db99-default-rtdb.asia-southeast1.firebasedatabase.app
NEXT_PUBLIC_FIREBASE_PROJECT_ID=medalert-1db99
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=medalert-1db99.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=506075095020
NEXT_PUBLIC_FIREBASE_APP_ID=1:506075095020:web:92a170b141afac17c8aac9
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-Y04YS34ESN
```

### 4. Run the Application

In the `frontend` directory, start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the application in action. 🎉

## Project Structure 📂

```
/your-project-root
|-- /frontend          // All Next.js frontend code
|   |-- /components    // React components
|   |-- /pages         // Next.js pages
|   |-- /public        // Static files
|   |-- /styles        // CSS and styling
|   |-- firebase.ts    // Firebase configuration for frontend
|   |-- ...            // Other frontend files
|
|-- /backend           // All Firebase backend code (if applicable)
|   |-- /functions     // Firebase Cloud Functions (if using)
|   |-- /lib           // Firebase configuration for backend (if needed)
|   |-- /services      // Firebase service logic (if needed)
|   |-- ...            // Other backend files
|
|-- .env.local         // Environment variables
|-- tsconfig.json      // TypeScript configuration
|-- package.json       // Project dependencies
```

## Contributing 🤝

Contributions are welcome! Please open an issue or submit a pull request for any suggestions or improvements.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit them (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙏

- [Firebase Documentation](https://firebase.google.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

For more information, feel free to contact me at [briannegarilao@gmail.com](mailto:briannegarilao@gmail.com). 📧
```
