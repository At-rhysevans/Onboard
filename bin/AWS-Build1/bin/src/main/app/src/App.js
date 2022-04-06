import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import AdminPanel from './components/admin-panel/AdminPanel';
import FinalPreview from './components/FinalPreview';
import Home from './components/Home';
import Login from './components/Login';
import SurveyPage from './components/survey-page/SurveyPage';
import LanguageAndEducation from './components/separated-forms/LanguageAndEducation';
import PersonalDetails from './components/separated-forms/PersonalDetails';
import BankDetails from './components/separated-forms/BankDetails';
import DrivingLicense from './components/separated-forms/DrivingLicense';
import EmergencyContact from './components/separated-forms/EmergencyContact';
import RefereesForm from './components/separated-forms/RefereesForm';
import LifeAssuranceForm from './components/separated-forms/LifeAssuranceForm';
import MedicalDetails from './components/separated-forms/MedicalDetails';
import Navbar from "./components/Navbar";
import HMRCForm from './components/separated-forms/HMRCForm/HMRCForm';
import Diversity from './components/separated-forms/Diversity';
import CriminalDeclaration from './components/separated-forms/CriminalDeclaration';
import Loans from './components/separated-forms/HMRCForm/Loans';

import { PersonProvider } from './context/PersonContext';



export default function App() {

  return (
    <PersonProvider>
      <Router>
      <Navbar  />
          <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route path="/home" element={<Home />} />

            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/medical-details" element={<MedicalDetails />} />
            <Route path="/language-and-education" element= {<LanguageAndEducation />}/>
            <Route path="/emergency-contact" element={<EmergencyContact />} />
            <Route path="/life-assurance" element={<LifeAssuranceForm />} />
            <Route path="/bank-details" element={<BankDetails />} />
            <Route path="/driving-license" element={<DrivingLicense />} />
            <Route path="/employer-form" element={<RefereesForm />} />
            <Route path="/HMRC-checklist" element={<HMRCForm />} />
            <Route path="/diversity" element={<Diversity />} />
            <Route path="/criminal-declaration" element={<CriminalDeclaration />} />
            <Route path="/Loans" element={<Loans />} />

            <Route path="/final-preview" element={<FinalPreview />} />
            <Route path="/survey" element={<SurveyPage />} />

            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
      </Router>
    </PersonProvider>
  );
}
