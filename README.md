# RxGenius - Prescription Management System

🧬 **AI-Powered Prescription Management System**

A modern, intuitive prescription management system designed for healthcare providers to efficiently manage patients and generate prescriptions.

## 🚀 Features

- **Dashboard Overview**: Real-time statistics and recent prescriptions
- **Patient Management**: Add, view, and manage patient records
- **Prescription Generation**: Create detailed prescriptions with multiple medications
- **AI-Powered**: Smart prescription assistance
- **Responsive Design**: Works seamlessly on all devices
- **Print-Ready**: Generate printable prescription documents

## 📋 Tech Stack

- **Backend**: Node.js + Express
- **Template Engine**: EJS
- **Styling**: Custom CSS with modern design
- **Database**: In-memory storage (easily upgradeable to PostgreSQL/MongoDB)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/vaibhaviimcal-web/rxgenius-prescription-system.git

# Navigate to project directory
cd rxgenius-prescription-system

# Install dependencies
npm install

# Start the server
npm start
```

## 🌐 Deployment

### Railway Deployment

This application is configured for one-click deployment on Railway:

1. Push code to GitHub
2. Connect Railway to your repository
3. Railway will automatically detect and deploy

### Environment Variables

```
PORT=3000
NODE_ENV=production
```

## 📱 Pages

- **Dashboard** (`/`) - Overview with statistics and recent prescriptions
- **Patients** (`/patients`) - Patient list and management
- **Add Patient** (`/patients/add`) - Register new patients
- **Prescriptions** (`/prescriptions`) - View all prescriptions
- **Generate Prescription** (`/prescriptions/add`) - Create new prescriptions
- **Prescription Details** (`/prescriptions/:id`) - View detailed prescription

## 🎨 Design Features

- Modern gradient sidebar
- Clean card-based layouts
- Intuitive navigation
- Professional color scheme
- Responsive grid system
- Print-optimized prescription views

## 👨‍⚕️ Default User

- **Name**: Dr. Smith
- **Role**: Healthcare Provider

## 🔒 Security Notes

For production deployment:
- Implement proper authentication
- Add database integration
- Enable HTTPS
- Add input validation
- Implement rate limiting

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ for Healthcare Providers**