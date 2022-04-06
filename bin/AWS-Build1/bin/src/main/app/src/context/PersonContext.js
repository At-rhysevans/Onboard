import axios from "axios";
import React, { useState } from "react";

const PersonContext = React.createContext([{}, () => {}]);

const PersonProvider = ({ children }) => {
    

    // Personal details
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [otherNames, setOtherNames] = useState("");
    const [surname, setSurname] = useState("");
    const [preferredName, setPreferredName] = useState("");
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [niNumber, setNiNumber] = useState("");
    const [dob, setDob] = useState("");
    const [nationality, setNationality] = useState("");
    const [address, setAddress] = useState("");
    const [town, setTown] = useState("");
    const [postcode, setPostcode] = useState("");
    const [county, setCounty] = useState("");
    const [personalMobile, setPersonalMobile] = useState("");
    const [otherPhone, setOtherPhone] = useState("");
    const [email, setEmail] = useState("");

    // Medical details
    const [specialNeeds, setSpecialNeeds] = useState("");
    const [medicalConditions, setMedicalConditions] = useState("");
    
    //Language  
    const [language1, setLanguage1] = useState("");
    const [language2, setLanguage2] = useState("");
    const [language3, setLanguage3] = useState("");
    const [language4, setLanguage4] = useState("");
    const [language5, setLanguage5] = useState("");

    const [languageWrite1, setLanguageWrite1] = useState("");
    const [languageWrite2, setLanguageWrite2] = useState("");
    const [languageWrite3, setLanguageWrite3] = useState("");
    const [languageWrite4, setLanguageWrite4] = useState("");
    const [languageWrite5, setLanguageWrite5] = useState("");

    const [languageRead1, setLanguageRead1] = useState("");
    const [languageRead2, setLanguageRead2] = useState("");
    const [languageRead3, setLanguageRead3] = useState("");
    const [languageRead4, setLanguageRead4] = useState("");
    const [languageRead5, setLanguageRead5] = useState("");

    const [languageSpeak1, setLanguageSpeak1] = useState("");
    const [languageSpeak2, setLanguageSpeak2] = useState("");
    const [languageSpeak3, setLanguageSpeak3] = useState("");
    const [languageSpeak4, setLanguageSpeak4] = useState("");
    const [languageSpeak5, setLanguageSpeak5] = useState("");

    //Further Education
    const [educationDate1, setEducationDate1] = useState("");
    const [educationDate2, setEducationDate2] = useState("");
    const [educationLevel1, setEducationLevel1] = useState("");
    const [educationLevel2, setEducationLevel2] = useState("");

    //professional qualifications
    const [qualificationsDate1, setQualificationsDate1] = useState("");
    const [qualificationsDate2, setQualificationsDate2] = useState("");
    const [qualificationsDate3, setQualificationsDate3] = useState("");

    const [qualificationsLevel1, setQualificationsLevel1] = useState("");
    const [qualificationsLevel2, setQualificationsLevel2] = useState("");
    const [qualificationsLevel3, setQualificationsLevel3] = useState("");

    

    // Emergency contact
    const [contactTitle, setContactTitle] = useState("");
    const [contactSurname, setContactSurname] = useState("");
    const [contactForenames, setContactForenames] = useState("");
    const [contactRelationship, setContactRelationship] = useState("");
    const [contactDayPhone, setContactDayPhone] = useState("");
    const [contactOtherPhone, setContactOtherPhone] = useState("");
    const [contactAddress, setContactAddress] = useState("");
    const [contactTown, setContactTown] = useState("");
    const [contactPostcode, setContactPostcode] = useState("");
    const [contactCounty, setContactCounty] = useState("");
    
    // Next of kin
    const [nokSurname, setNokSurname] = useState("");
    const [nokForenames, setNokForenames] = useState("");
    const [nokNationality, setNokNationality] = useState("");
    const [nokAddress, setNokAddress] = useState("");
    const [nokPhone, setNokPhone] = useState("");
    const [nokGender, setNokGender] = useState("");
    const [nokDOB, setNokDOB] = useState("");
    const [nokRelationship, setNokRelationship] = useState("");

    // Expense form
    const [expense_acc_name, setExpense_acc_name] = useState("");
    const [expense_sort, setExpense_sort] = useState("");
    const [expense_acc_num, setExpense_acc_num] = useState("");

    // Criminal
    const [criminal, setCriminal] = useState("");

    // Life assurance nomination
    const [pensionName, setPensionName] = useState("");
    const [employeeNum, setEmployeeNum] = useState("");
    const [nomineeName, setNomineeName] = useState("");
    const [nomineeAddress, setNomineeAddress] = useState("");
    const [benefitAmount, setBenefitAmount] = useState("");
    const [nominee1, setNominee1] = useState("");
    const [nominee2, setNominee2] = useState("");
    const [nominee3, setNominee3] = useState("");
    const [nominee4, setNominee4] = useState("");
    const [nominee1_address, setNominee1_address] = useState("");
    const [nominee2_address, setNominee2_address] = useState("");
    const [nominee3_address, setNominee3_address] = useState("");
    const [nominee4_address, setNominee4_address] = useState("");
    const [nominee1_benefit, setNominee1_benefit] = useState("");
    const [nominee2_benefit, setNominee2_benefit] = useState("");
    const [nominee3_benefit, setNominee3_benefit] = useState("");
    const [nominee4_benefit, setNominee4_benefit] = useState("");
    




    // Bank details
    const [employmentStartDate, setEmploymentStartDate] = useState("");
    const [accountName, setAccountName] = useState("");
    const [sortCode, setSortCode] = useState("");
    const [accountNumber, setAccountNumber] = useState("");

    // Driving license
    const [dateEnteredUk, setDateEnteredUk] = useState("");
    const [drivingLicenseNum, setDrivingLicenseNum] = useState("");
    const [licenseCountryOfIssue, setLicenseseCountryOfIssue] = useState("");
    const [licenseAddress, setLicenseAddress] = useState("");
    const [cb_assoc_with_org, setcb_assoc_with_org] = useState(false);
    const [cb_not_assoc_with_org, setcb_not_assoc_with_org] = useState(false);
    const [name_of_employee_driver, setname_of_employee_driver] = useState("");
    const [cb_company_car, setcb_company_car] = useState(false);
    const [cb_car_on_business, setcb_car_on_business] = useState(false);
    const [cb_pool_vehicle, setcb_pool_vehicle] = useState(false);
    const [cb_occasionally, setcb_occasionally] = useState(false);
    const [middle_initial, setmiddle_initial] = useState("");

    // References
    const [ref1_name, setref1_name] = useState("");
    const [ref1_jobTitle, setref1_jobTitle] = useState("");
    const [ref1_company, setref1_company] = useState("");
    const [ref1_address_line1, setref1_address_line1] = useState("");
    const [ref1_address_line2, setref1_address_line2] = useState("");
    const [ref1_address_line3, setref1_address_line3] = useState("");
    const [ref1_phone, setref1_phone] = useState("");
    const [ref1_email, setref1_email] = useState("");
    const [ref1_employ_start, setref1_employ_start] = useState("");
    const [ref1_employ_end, setref1_employ_end] = useState("");

    const [ref2_name, setref2_name] = useState("");
    const [ref2_jobTitle, setref2_jobTitle] = useState("");
    const [ref2_company, setref2_company] = useState("");
    const [ref2_address_line1, setref2_address_line1] = useState("");
    const [ref2_address_line2, setref2_address_line2] = useState("");
    const [ref2_address_line3, setref2_address_line3] = useState("");
    const [ref2_phone, setref2_phone] = useState("");
    const [ref2_email, setref2_email] = useState("");
    const [ref2_employ_start, setref2_employ_start] = useState("");
    const [ref2_employ_end, setref2_employ_end] = useState("");

    const [ref3_name, setref3_name] = useState("");
    const [ref3_jobTitle, setref3_jobTitle] = useState("");
    const [ref3_company, setref3_company] = useState("");
    const [ref3_address_line1, setref3_address_line1] = useState("");
    const [ref3_address_line2, setref3_address_line2] = useState("");
    const [ref3_address_line3, setref3_address_line3] = useState("");
    const [ref3_phone, setref3_phone] = useState("");
    const [ref3_email, setref3_email] = useState("");
    const [ref3_employ_start, setref3_employ_start] = useState("");
    const [ref3_employ_end, setref3_employ_end] = useState("");

    const [ref4_name, setref4_name] = useState("");
    const [ref4_jobTitle, setref4_jobTitle] = useState("");
    const [ref4_company, setref4_company] = useState("");
    const [ref4_address_line1, setref4_address_line1] = useState("");
    const [ref4_address_line2, setref4_address_line2] = useState("");
    const [ref4_address_line3, setref4_address_line3] = useState("");
    const [ref4_phone, setref4_phone] = useState("");
    const [ref4_email, setref4_email] = useState("");
    const [ref4_employ_start, setref4_employ_start] = useState("");
    const [ref4_employ_end, setref4_employ_end] = useState("");



    // Signature
    const [date, setDate] = useState("");
    const [signature, setSignature] = useState("");

    //HMRC
    const [cb_HMRC1A, setcb_HMRC1A] = useState(false);
    const [cb_HMRC1B, setcb_HMRC1B] = useState(false);
    const [cb_HMRC1C, setcb_HMRC1C] = useState(false);
    const [cb2_yes, setcb2_yes] = useState(false);
    const [cb2_no, setcb2_no] = useState(false);
    const [cb3_yes, setcb3_yes] = useState(false);
    const [cb3_no, setcb3_no] = useState(false);
    const [cb4_yes, setcb4_yes] = useState(false);
    const [cb4_no, setcb4_no] = useState(false);
    const [cb_plan1, setcb_plan1] = useState(false);
    const [cb_plan2, setcb_plan2] = useState(false);
    const [cb_planBoth, setcb_planBoth] = useState(false);
    const [cb6_yes, setcb6_yes] = useState(false);
    const [cb6_no, setcb6_no] = useState(false);
    const [cb7_yes, setcb7_yes] = useState(false);
    const [cb7_no, setcb7_no] = useState(false);
    const [cb8_yes, setcb8_yes] = useState(false);
    const [cb8_no, setcb8_no] = useState(false);



    //Diversity

    const [div_name, setdiv_name] = useState("");
    const [div_A1, setdiv_A1] = useState(false);
    const [div_A2, setdiv_A2] = useState(false);
    const [div_A3, setdiv_A3] = useState(false);
    const [div_Aoth, setdiv_Aoth] = useState("");

    const [div_B1, setdiv_B1] = useState(false);
    const [div_B2, setdiv_B2] = useState(false);
    const [div_B3, setdiv_B3] = useState(false);
    const [div_B4, setdiv_B4] = useState(false);
    const [div_Both, setdiv_Both] = useState("");

    const [div_C1, setdiv_C1] = useState(false);
    const [div_C2, setdiv_C2] = useState(false);
    const [div_C3, setdiv_C3] = useState(false);
    const [div_C4, setdiv_C4] = useState(false);
    const [div_Coth, setdiv_Coth] = useState("");

    const [div_D1, setdiv_D1] = useState(false);
    const [div_D2, setdiv_D2] = useState(false);
    const [div_D3, setdiv_D3] = useState(false);
    const [div_Doth, setdiv_Doth] = useState("");

    const [div_E1, setdiv_E1] = useState(false);
    const [div_E2, setdiv_E2] = useState(false);
    const [div_Eoth, setdiv_Eoth] = useState("");

    const [div_F1, setdiv_F1] = useState(false);

    const [div_GY, setdiv_GY] = useState(false);
    const [div_GN, setdiv_GN] = useState(false);
    const [div_Gdetails, setdiv_Gdetails] = useState("");

    const [div_HH, setdiv_HH] = useState(false);
    const [div_HG, setdiv_HG] = useState(false);
    const [div_HL, setdiv_HL] = useState(false);
    const [div_HB, setdiv_HB] = useState(false);
    const [div_HO, setdiv_HO] = useState(false);

    async function postAllData() {

      const data = {
        title: title,
        firstName: firstName,
        otherNames: otherNames,
        surname: surname,
        preferredName: preferredName,
        gender: gender,
        maritalStatus: maritalStatus,
        niNumber: niNumber,
        dob: dob,
        nationality: nationality,
        address: address,
        town: town,
        postcode: postcode,
        county: county,
        personalMobile: personalMobile,
        otherPhone: otherPhone,
        email: email,

        specialNeeds: specialNeeds,
        medicalConditions: medicalConditions,
        //language
        language1: language1,
        language2: language2,
        language3: language3,
        language4: language4,
        language5: language5,

        languageRead1: languageRead1,
        languageRead2: languageRead2,
        languageRead3: languageRead3,
        languageRead4: languageRead4,
        languageRead5: languageRead5,

        languageWrite1: languageWrite1,
        languageWrite2: languageWrite2,
        languageWrite3: languageWrite3,
        languageWrite4: languageWrite4,
        languageWrite5: languageWrite5,

        languageSpeak1: languageSpeak1,
        languageSpeak2: languageSpeak2,
        languageSpeak3: languageSpeak3,
        languageSpeak4: languageSpeak4,
        languageWrite5: languageSpeak5,

       //education
        educationDate1:educationDate1,
        educationDate2:educationDate2,
        educationLevel1:educationLevel1,
        educationLevel2:educationLevel2,
        
      //professional qualifications
        qualificationsDate1:qualificationsDate1,
        qualificationsDate2:qualificationsDate2,
        qualificationsDate3:qualificationsDate3,
        qualificationsLevel1:qualificationsLevel1,
        qualificationsLevel2:qualificationsLevel2,
        qualificationsLevel3:qualificationsLevel3,






        contactTitle: contactTitle,
        contactSurname: contactSurname,
        contactForenames: contactForenames,
        contactRelationship: contactRelationship,
        contactDayPhone: contactDayPhone,
        contactOtherPhone: contactOtherPhone,
        contactAddress: contactAddress,
        contactTown: contactTown,
        contactPostcode: contactPostcode,
        contactCounty: contactCounty,

        nokSurname: nokSurname,
        nokForenames: nokForenames,
        nokNationality: nokNationality,
        nokAddress: nokAddress,
        nokPhone: nokPhone,
        nokGender: nokGender,
        nokDOB: nokDOB,
        nokRelationship: nokRelationship,


        //Life Assurance
        pensionName: pensionName,
        employeeNum: employeeNum,
        nomineeName: nomineeName,
        nomineeAddress: nomineeAddress,
        benefitAmount: benefitAmount,
        nominee1: nominee1,
        nominee2: nominee2,
        nominee3: nominee3,
        nominee4: nominee4,
        nominee1_address: nominee1_address,
        nominee2_address: nominee2_address,
        nominee3_address: nominee3_address,
        nominee4_address: nominee4_address,
        nominee1_benefit: nominee1_benefit,
        nominee2_benefit: nominee2_benefit,
        nominee3_benefit: nominee3_benefit,
        nominee4_benefit: nominee4_benefit,
        

        employmentStartDate: employmentStartDate,
        accountName: accountName,
        sortCode: sortCode,
        accountNumber: accountNumber,

        criminal: criminal,

        expense_acc_name: expense_acc_name,
        expense_sort: expense_sort,
        expense_acc_name: expense_acc_name,

        dateEnteredUk: dateEnteredUk,
        drivingLicenseNum: drivingLicenseNum,
        licenseCountryOfIssue: licenseCountryOfIssue,
        licenseAddress: licenseAddress,
        cb_assoc_with_org : cb_assoc_with_org,
        cb_not_assoc_with_org : cb_not_assoc_with_org,
        name_of_employee_driver : name_of_employee_driver,
        cb_company_car : cb_company_car,
        cb_car_on_business : cb_car_on_business,
        cb_pool_vehicle : cb_pool_vehicle,
        cb_occasionally : cb_occasionally,
        middle_initial : middle_initial,
        

        // references
        ref1_name : ref1_name,
        ref1_jobTitle : ref1_jobTitle,
        ref1_company : ref1_company,
        ref1_address_line1 : ref1_address_line1,
        ref1_address_line2 : ref1_address_line2,
        ref1_address_line3 : ref1_address_line3,
        ref1_phone : ref1_phone,
        ref1_email :ref1_email,
        ref1_employ_start : ref1_employ_start,
        ref1_employ_end : ref1_employ_end,

        ref2_name : ref2_name,
        ref2_jobTitle : ref2_jobTitle,
        ref2_company : ref2_company,
        ref2_address_line1 : ref2_address_line1,
        ref2_address_line2 : ref2_address_line2,
        ref2_address_line3 : ref2_address_line3,
        ref2_phone : ref2_phone,
        ref2_email :ref2_email,
        ref2_employ_start : ref2_employ_start,
        ref2_employ_end : ref2_employ_end,

        ref3_name : ref3_name,
        ref3_jobTitle : ref3_jobTitle,
        ref3_company : ref3_company,
        ref3_address_line1 : ref3_address_line1,
        ref3_address_line2 : ref3_address_line2,
        ref3_address_line3 : ref3_address_line3,
        ref3_phone : ref3_phone,
        ref3_email :ref3_email,
        ref3_employ_start : ref3_employ_start,
        ref3_employ_end : ref3_employ_end,

        ref4_name : ref4_name,
        ref4_jobTitle : ref4_jobTitle,
        ref4_company : ref4_company,
        ref4_address_line1 : ref4_address_line1,
        ref4_address_line2 : ref4_address_line2,
        ref4_address_line3 : ref4_address_line3,
        ref4_phone : ref4_phone,
        ref4_email :ref4_email,
        ref4_employ_start : ref4_employ_start,
        ref4_employ_end : ref4_employ_end,

        

        //HMRC
        date: date,
        signature: signature,

        cb_HMRC1A: cb_HMRC1A,
        cb_HMRC1B: cb_HMRC1B,
        cb_HMRC1C: cb_HMRC1C,
        cb2_yes: cb2_yes,
        cb2_no: cb2_no,
        cb3_yes: cb3_yes,
        cb3_no: cb3_no,
        cb4_yes: cb4_yes,
        cb4_no: cb4_no,
        cb_plan1: cb_plan1,
        cb_plan2: cb_plan2,
        cb_planBoth: cb_planBoth,
        cb6_yes: cb6_yes,
        cb6_no: cb6_no,
        cb7_yes: cb7_yes,
        cb7_no: cb7_no,
        cb8_yes: cb8_yes,
        cb8_no: cb8_no,

        //diversity
        div_name: div_name,
        div_A1: div_A1,
        div_A2: div_A2,
        div_A3: div_A3,
        div_Aoth: div_Aoth,

        div_B1: div_B1,
        div_B2: div_B2,
        div_B3: div_B3,
        div_B4: div_B4,
        div_Both: div_Both,

        div_C1: div_C1,
        div_C2: div_C2,
        div_C3: div_C3,
        div_C4: div_C4,
        div_Coth: div_Coth,

        div_D1: div_D1,
        div_D2: div_D2,
        div_D3: div_D3,
        div_Doth: div_Doth,

        div_E1: div_E1,
        div_E2: div_E2,
        div_Eoth: div_Eoth,

        div_F1: div_F1,

        div_GY: div_GY,
        div_GN: div_GN,
        div_Gdetails: div_Gdetails,

        div_HH: div_HH,
        div_HG: div_HG,
        div_HL: div_HL,
        div_HB: div_HB,
        div_HO: div_HO,


    };


    axios.post("/api/v1/person/add-person", data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log("Error in Personal Details Form! \n" + err);
      });
    };



    const states = {
        postAllData: postAllData,

        title: title,
        firstName: firstName,
        otherNames: otherNames,
        surname: surname,
        preferredName: preferredName,
        gender: gender,
        maritalStatus: maritalStatus,
        niNumber: niNumber,
        dob: dob,
        nationality: nationality,
        address: address,
        town: town,
        postcode: postcode,
        county: county,
        personalMobile: personalMobile,
        otherPhone: otherPhone,
        email: email,

        specialNeeds: specialNeeds,
        medicalConditions: medicalConditions,

        language1: language1,
        language2: language2,
        language3: language3,
        language4: language4,
        language5: language5,

        languageRead1: languageRead1,
        languageRead2: languageRead2,
        languageRead3: languageRead3,
        languageRead4: languageRead4,
        languageRead5: languageRead5,

        languageWrite1: languageWrite1,
        languageWrite2: languageWrite2,
        languageWrite3: languageWrite3,
        languageWrite4: languageWrite4,
        languageWrite5: languageWrite5,

        languageSpeak1: languageSpeak1,
        languageSpeak2: languageSpeak2,
        languageSpeak3: languageSpeak3,
        languageSpeak4: languageSpeak4,
        languageWrite5: languageSpeak5,

       //education
        educationDate1:educationDate1,
        educationDate2:educationDate2,
        educationLevel1:educationLevel1,
        educationLevel2:educationLevel2,
        
      //professional qualifications
        qualificationsDate1:qualificationsDate1,
        qualificationsDate2:qualificationsDate2,
        qualificationsDate3:qualificationsDate3,
        qualificationsLevel1:qualificationsLevel1,
        qualificationsLevel2:qualificationsLevel2,
        qualificationsLevel3:qualificationsLevel3,

        contactTitle: contactTitle,
        contactSurname: contactSurname,
        contactForenames: contactForenames,
        contactRelationship: contactRelationship,
        contactDayPhone: contactDayPhone,
        contactOtherPhone: contactOtherPhone,
        contactAddress: contactAddress,
        contactTown: contactTown,
        contactPostcode: contactPostcode,
        contactCounty: contactCounty,

        nokSurname: nokSurname,
        nokForenames: nokForenames,
        nokNationality: nokNationality,
        nokAddress: nokAddress,
        nokPhone: nokPhone,
        nokGender: nokGender,
        nokDOB: nokDOB,
        nokRelationship: nokRelationship,

        pensionName: pensionName,
        employeeNum: employeeNum,
        nomineeName: nomineeName,
        nomineeAddress: nomineeAddress,
        benefitAmount: benefitAmount,
        nominee1: nominee1,
        nominee2: nominee2,
        nominee3: nominee3,
        nominee4: nominee4,
        nominee1_address: nominee1_address,
        nominee2_address: nominee2_address,
        nominee3_address: nominee3_address,
        nominee4_address: nominee4_address,
        nominee1_benefit: nominee1_benefit,
        nominee2_benefit: nominee2_benefit,
        nominee3_benefit: nominee3_benefit,
        nominee4_benefit: nominee4_benefit,
        

        employmentStartDate: employmentStartDate,
        accountName: accountName,
        sortCode: sortCode,
        accountNumber: accountNumber,

        criminal: criminal,

        expense_acc_name: expense_acc_name,
        expense_sort: expense_sort,
        expense_acc_num: expense_acc_num,

        dateEnteredUk: dateEnteredUk,
        drivingLicenseNum: drivingLicenseNum,
        licenseCountryOfIssue: licenseCountryOfIssue,
        licenseAddress: licenseAddress,
        cb_assoc_with_org : cb_assoc_with_org,
        cb_not_assoc_with_org : cb_not_assoc_with_org,
        name_of_employee_driver : name_of_employee_driver,
        cb_company_car : cb_company_car,
        cb_car_on_business : cb_car_on_business,
        cb_pool_vehicle : cb_pool_vehicle,
        cb_occasionally : cb_occasionally,
        middle_initial : middle_initial,

        ref1_name : ref1_name,
        ref1_jobTitle : ref1_jobTitle,
        ref1_company : ref1_company,
        ref1_address_line1 : ref1_address_line1,
        ref1_address_line2 : ref1_address_line2,
        ref1_address_line3 : ref1_address_line3,
        ref1_phone : ref1_phone,
        ref1_email :ref1_email,
        ref1_employ_start : ref1_employ_start,
        ref1_employ_end : ref1_employ_end,

        ref2_name : ref2_name,
        ref2_jobTitle : ref2_jobTitle,
        ref2_company : ref2_company,
        ref2_address_line1 : ref2_address_line1,
        ref2_address_line2 : ref2_address_line2,
        ref2_address_line3 : ref2_address_line3,
        ref2_phone : ref2_phone,
        ref2_email :ref2_email,
        ref2_employ_start : ref2_employ_start,
        ref2_employ_end : ref2_employ_end,

        ref3_name : ref3_name,
        ref3_jobTitle : ref3_jobTitle,
        ref3_company : ref3_company,
        ref3_address_line1 : ref3_address_line1,
        ref3_address_line2 : ref3_address_line2,
        ref3_address_line3 : ref3_address_line3,
        ref3_phone : ref3_phone,
        ref3_email :ref3_email,
        ref3_employ_start : ref3_employ_start,
        ref3_employ_end : ref3_employ_end,

        ref4_name : ref4_name,
        ref4_jobTitle : ref4_jobTitle,
        ref4_company : ref4_company,
        ref4_address_line1 : ref4_address_line1,
        ref4_address_line2 : ref4_address_line2,
        ref4_address_line3 : ref4_address_line3,
        ref4_phone : ref4_phone,
        ref4_email :ref4_email,
        ref4_employ_start : ref4_employ_start,
        ref4_employ_end : ref4_employ_end,

        date: date,
        signature: signature,

        cb_HMRC1A: cb_HMRC1A,
        cb_HMRC1B: cb_HMRC1B,
        cb_HMRC1C: cb_HMRC1C,
        cb2_yes: cb2_yes,
        cb2_no: cb2_no,
        cb3_yes: cb3_yes,
        cb3_no: cb3_no,
        cb4_yes: cb4_yes,
        cb4_no: cb4_no,
        cb_plan1: cb_plan1,
        cb_plan2: cb_plan2,
        cb_planBoth: cb_planBoth,
        cb6_yes: cb6_yes,
        cb6_no: cb6_no,
        cb7_yes: cb7_yes,
        cb7_no: cb7_no,
        cb8_yes: cb8_yes,
        cb8_no: cb8_no,

        div_name: div_name,
        div_A1: div_A1,
        div_A2: div_A2,
        div_A3: div_A3,
        div_Aoth: div_Aoth,

        div_B1: div_B1,
        div_B2: div_B2,
        div_B3: div_B3,
        div_B4: div_B4,
        div_Both: div_Both,

        div_C1: div_C1,
        div_C2: div_C2,
        div_C3: div_C3,
        div_C4: div_C4,
        div_Coth: div_Coth,

        div_D1: div_D1,
        div_D2: div_D2,
        div_D3: div_D3,
        div_Doth: div_Doth,

        div_E1: div_E1,
        div_E2: div_E2,
        div_Eoth: div_Eoth,

        div_F1: div_F1,

        div_GY: div_GY,
        div_GN: div_GN,
        div_Gdetails: div_Gdetails,

        div_HH: div_HH,
        div_HG: div_HG,
        div_HL: div_HL,
        div_HB: div_HB,
        div_HO: div_HO,

        // Setters

        setTitle: setTitle,
        setFirstName: setFirstName,
        setOtherNames: setOtherNames,
        setSurname: setSurname,
        setPreferredName: setPreferredName,
        setGender: setGender,
        setMaritalStatus: setMaritalStatus,
        setNiNumber: setNiNumber,
        setDob: setDob,
        setNationality: setNationality,
        setAddress: setAddress,
        setTown: setTown,
        setPostcode: setPostcode,
        setCounty: setCounty,
        setPersonalMobile: setPersonalMobile,
        setOtherPhone: setOtherPhone,
        setEmail: setEmail,
        setLanguage1: setLanguage1,
        setLanguage2: setLanguage2,
        setLanguage3: setLanguage3,
        setLanguage4: setLanguage4,
        setLanguage5: setLanguage5,

        setLanguageRead1: setLanguageRead1,
        setLanguageRead2: setLanguageRead2,
        setLanguageRead3: setLanguageRead3,
        setLanguageRead4: setLanguageRead4,
        setLanguageRead5: setLanguageRead5,

        setLanguageWrite1: setLanguageWrite1,
        setLanguageWrite2: setLanguageWrite2,
        setLanguageWrite3: setLanguageWrite3,
        setLanguageWrite4: setLanguageWrite4,
        setLanguageWrite5: setLanguageWrite5,

        setLanguageSpeak1: setLanguageSpeak1,
        setLanguageSpeak2: setLanguageSpeak2,
        setLanguageSpeak3: setLanguageSpeak3,
        setLanguageSpeak4: setLanguageSpeak4,
        setLanguageWrite5: setLanguageSpeak5,

       //education
        setEducationDate1:setEducationDate1,
        setEducationDate2:setEducationDate2,
        setEducationLevel1:setEducationLevel1,
        setEducationLevel2:setEducationLevel2,
        
      //professional qualifications
      setQualificationsDate1:setQualificationsDate1,
      setQualificationsDate2:setQualificationsDate2,
      setQualificationsDate3:setQualificationsDate3,
      setQualificationsLevel1:setQualificationsLevel1,
      setQualificationsLevel2:setQualificationsLevel2,
      setQualificationsLevel3:setQualificationsLevel3,

        setSpecialNeeds: setSpecialNeeds,
        setMedicalConditions: setMedicalConditions,

        setContactTitle: setContactTitle,
        setContactSurname: setContactSurname,
        setContactForenames: setContactForenames,
        setContactRelationship: setContactRelationship,
        setContactDayPhone: setContactDayPhone,
        setContactOtherPhone: setContactOtherPhone,
        setContactAddress: setContactAddress,
        setContactTown: setContactTown,
        setContactPostcode: setContactPostcode,
        setContactCounty: setContactCounty,


        setNokSurname: setNokSurname,
        setNokForenames: setNokForenames,
        setNokNationality: setNokNationality,
        setNokAddress: setNokAddress,
        setNokPhone: setNokPhone,
        setNokGender: setNokGender,
        setNokDOB: setNokDOB,
        setNokRelationship: setNokRelationship,

        setPensionName: setPensionName,
        setEmployeeNum: setEmployeeNum,
        setNomineeName: setNomineeName,
        setNomineeAddress: setNomineeAddress,
        setBenefitAmount: setBenefitAmount,
        setNominee1: setNominee1,
        setNominee2: setNominee2,
        setNominee3: setNominee3,
        setNominee4: setNominee4,
        setNominee1_address: setNominee1_address,
        setNominee2_address: setNominee2_address,
        setNominee3_address: setNominee3_address,
        setNominee4_address: setNominee4_address,
        setNominee1_benefit: setNominee1_benefit,
        setNominee2_benefit: setNominee2_benefit,
        setNominee3_benefit: setNominee3_benefit,
        setNominee4_benefit: setNominee4_benefit,
        

        setEmploymentStartDate: setEmploymentStartDate,
        setAccountName: setAccountName,
        setSortCode: setSortCode,
        setAccountNumber: setAccountNumber,

        setCriminal: setCriminal,

        setExpense_acc_name: setExpense_acc_name,
        setExpense_sort: setExpense_sort,
        setExpense_acc_num: setEmployeeNum, 

        setDateEnteredUk: setDateEnteredUk,
        setDrivingLicenseNum: setDrivingLicenseNum,
        setLicenseseCountryOfIssue: setLicenseseCountryOfIssue,
        setLicenseAddress: setLicenseAddress,
        setcb_assoc_with_org : setcb_assoc_with_org,
        setcb_not_assoc_with_org : setcb_not_assoc_with_org,
        setname_of_employee_driver : setname_of_employee_driver,
        setcb_company_car : setcb_company_car,
        setcb_car_on_business : setcb_car_on_business,
        setcb_pool_vehicle : setcb_pool_vehicle,
        setcb_occasionally : setcb_occasionally,
        setmiddle_initial : setmiddle_initial,

        setref1_name : setref1_name,
        setref1_jobTitle : setref1_jobTitle,
        setref1_company : setref1_company,
        setref1_address_line1 : setref1_address_line1,
        setref1_address_line2 : setref1_address_line2,
        setref1_address_line3 : setref1_address_line3,
        setref1_phone : setref1_phone,
        setref1_email :setref1_email,
        setref1_employ_start : setref1_employ_start,
        setref1_employ_end : setref1_employ_end,

        setref2_name : setref2_name,
        setref2_jobTitle : setref2_jobTitle,
        setref2_company : setref2_company,
        setref2_address_line1 : setref2_address_line1,
        setref2_address_line2 : setref2_address_line2,
        setref2_address_line3 : setref2_address_line3,
        setref2_phone : setref2_phone,
        setref2_email :setref2_email,
        setref2_employ_start : setref2_employ_start,
        setref2_employ_end : setref2_employ_end,

        setref3_name : setref3_name,
        setref3_jobTitle : setref3_jobTitle,
        setref3_company : setref3_company,
        setref3_address_line1 : setref3_address_line1,
        setref3_address_line2 : setref3_address_line2,
        setref3_address_line3 : setref3_address_line3,
        setref3_phone : setref3_phone,
        setref3_email :setref3_email,
        setref3_employ_start : setref3_employ_start,
        setref3_employ_end : setref3_employ_end,

        setref4_name : setref4_name,
        setref4_jobTitle : setref4_jobTitle,
        setref4_company : setref4_company,
        setref4_address_line1 : setref4_address_line1,
        setref4_address_line2 : setref4_address_line2,
        setref4_address_line3 : setref4_address_line3,
        setref4_phone : setref4_phone,
        setref4_email :setref4_email,
        setref4_employ_start : setref4_employ_start,
        setref4_employ_end : setref4_employ_end,


        setDate: setDate,
        setSignature: setSignature,

        setcb_HMRC1A: setcb_HMRC1A,
        setcb_HMRC1B: setcb_HMRC1B,
        setcb_HMRC1C: setcb_HMRC1C,
        setcb2_yes: setcb2_yes,
        setcb2_no: setcb2_no,
        setcb3_yes: setcb3_yes,
        setcb3_no: setcb3_no,
        setcb4_yes: setcb4_yes,
        setcb4_no: setcb4_no,
        setcb_plan1: setcb_plan1,
        setcb_plan2: setcb_plan2,
        setcb_planBoth: setcb_planBoth,
        setcb6_yes: setcb6_yes,
        setcb6_no: setcb6_no,
        setcb7_yes: setcb7_yes,
        setcb7_no: setcb7_no,
        setcb8_yes: setcb8_yes,
        setcb8_no: setcb8_no,

        //diversity

        setdiv_name: setdiv_name,
        setdiv_A1: setdiv_A1,
        setdiv_A2: setdiv_A2,
        setdiv_A3: setdiv_A3,
        setdiv_Aoth: setdiv_Aoth,

        setdiv_B1: setdiv_B1,
        setdiv_B2: setdiv_B2,
        setdiv_B3: setdiv_B3,
        setdiv_B4: setdiv_B4,
        setdiv_Both: setdiv_Both,

        setdiv_C1: setdiv_C1,
        setdiv_C2: setdiv_C2,
        setdiv_C3: setdiv_C3,
        setdiv_C4: setdiv_C4,
        setdiv_Coth: setdiv_Coth,

        setdiv_D1: setdiv_D1,
        setdiv_D2: setdiv_D2,
        setdiv_D3: setdiv_D3,
        setdiv_Doth: setdiv_Doth,

        setdiv_E1: setdiv_E1,
        setdiv_E2: setdiv_E2,
        setdiv_Eoth: setdiv_Eoth,

        setdiv_F1: setdiv_F1,

        setdiv_GY: setdiv_GY,
        setdiv_GN: setdiv_GN,
        setdiv_Gdetails: setdiv_Gdetails,

        setdiv_HH: setdiv_HH,
        setdiv_HG: setdiv_HG,
        setdiv_HL: setdiv_HL,
        setdiv_HB: setdiv_HB,
        setdiv_HO: setdiv_HO,
    }

    

    return (
      <PersonContext.Provider value={states}>
        {children}
      </PersonContext.Provider>
    )
  }

   
  export { PersonContext, PersonProvider }