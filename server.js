const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In-memory data storage
let patients = [
  { id: '140447', name: 'Test Patient 140447', age: 45, gender: 'Male', contact: '+1234567890' },
  { id: '140448', name: 'Test Patient 140448', age: 32, gender: 'Female', contact: '+1234567891' }
];

let prescriptions = [
  {
    id: uuidv4(),
    patientId: '140447',
    patientName: 'Test Patient 140447',
    diagnosis: 'Upper respiratory tract infection',
    medications: [
      { name: 'Amoxicillin', dosage: '500mg', frequency: '3 times daily', duration: '7 days' }
    ],
    date: '12/30/2025',
    doctor: 'Dr. Smith'
  },
  {
    id: uuidv4(),
    patientId: '140447',
    patientName: 'Test Patient 140447',
    diagnosis: 'Viral fever',
    medications: [
      { name: 'Paracetamol', dosage: '650mg', frequency: '3 times daily', duration: '5 days' }
    ],
    date: '12/30/2025',
    doctor: 'Dr. Smith'
  }
];

// Routes
app.get('/', (req, res) => {
  const stats = {
    totalPatients: patients.length,
    totalPrescriptions: prescriptions.length,
    aiStatus: 'Active'
  };
  const recentPrescriptions = prescriptions.slice(-5).reverse();
  res.render('dashboard', { stats, recentPrescriptions });
});

app.get('/patients', (req, res) => {
  res.render('patients', { patients });
});

app.get('/patients/add', (req, res) => {
  res.render('add-patient');
});

app.post('/patients/add', (req, res) => {
  const newPatient = {
    id: Math.floor(100000 + Math.random() * 900000).toString(),
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    contact: req.body.contact
  };
  patients.push(newPatient);
  res.redirect('/patients');
});

app.get('/prescriptions', (req, res) => {
  res.render('prescriptions', { prescriptions, patients });
});

app.get('/prescriptions/add', (req, res) => {
  res.render('add-prescription', { patients });
});

app.post('/prescriptions/add', (req, res) => {
  const medications = [];
  if (Array.isArray(req.body.medName)) {
    for (let i = 0; i < req.body.medName.length; i++) {
      medications.push({
        name: req.body.medName[i],
        dosage: req.body.medDosage[i],
        frequency: req.body.medFrequency[i],
        duration: req.body.medDuration[i]
      });
    }
  } else {
    medications.push({
      name: req.body.medName,
      dosage: req.body.medDosage,
      frequency: req.body.medFrequency,
      duration: req.body.medDuration
    });
  }

  const patient = patients.find(p => p.id === req.body.patientId);
  const newPrescription = {
    id: uuidv4(),
    patientId: req.body.patientId,
    patientName: patient ? patient.name : 'Unknown',
    diagnosis: req.body.diagnosis,
    medications: medications,
    date: new Date().toLocaleDateString('en-US'),
    doctor: 'Dr. Smith'
  };
  prescriptions.push(newPrescription);
  res.redirect('/prescriptions');
});

app.get('/prescriptions/:id', (req, res) => {
  const prescription = prescriptions.find(p => p.id === req.params.id);
  if (prescription) {
    res.render('prescription-detail', { prescription });
  } else {
    res.redirect('/prescriptions');
  }
});

app.listen(PORT, () => {
  console.log(`RxGenius server running on port ${PORT}`);
});