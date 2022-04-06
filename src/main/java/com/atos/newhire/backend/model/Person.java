package com.atos.newhire.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.UUID;

public class Person {
    private UUID id;
    private String firstName;
    private String surname;
    private String prefName;
    private String gender;
    private String ni_num;
    private String title;
    private String dob;
    private String nationality;
    private String marital;
    private String date;

    // language and education
    private String language1;
    private String language2;
    private String language3;
    private String language4;
    private String language5;

    private String languageWrite1;
    private String languageWrite2;
    private String languageWrite3;
    private String languageWrite4;
    private String languageWrite5;

    private String languageRead1;
    private String languageRead2;
    private String languageRead3;
    private String languageRead4;
    private String languageRead5;

    private String languageSpeak1;
    private String languageSpeak2;
    private String languageSpeak3;
    private String languageSpeak4;
    private String languageSpeak5;

    private String educationDate1;
    private String educationDate2;
    private String educationLevel1;
    private String educationLevel2;

    private String qualificationsDate1;
    private String qualificationsDate2;
    private String qualificationsDate3;

    private String qualificationsLevel1;
    private String qualificationsLevel2;
    private String qualificationsLevel3;

    //Home Address
    private String address;
    private String town;
    private String postcode;
    private String mobile;
    private String county;
    private String phone;

    //Emergency Contact
    private String emerg_surname;
    private String emerg_firstname;
    private String emerg_phone;
    private String emerg_address;
    private String emerg_town;
    private String emerg_postcode;
    private String emerg_title;
    private String emerg_relationship;
    private String emerg_phoneother;
    private String emerg_county;

    //Kin Contact
    private String kin_surname;
    private String kin_forename;
    private String kin_nationality;
    private String kin_address;
    private String kin_phone;
    private String kin_gender;
    private String kin_dob;
    private String kin_relationship;

    //Special Needs
    private String physical;
    private String condition;

    //Bank Details
    private String sort;
    private String acc_num;
    private String acc_name;
    private String expense_sort;
    private String expense_acc_name;
    private String expense_acc_num;

    //Criminal Declaration
    private String criminal;

    //Pension
    private String pension;
    private String employee_num;

    //HMRC
    private String employment_start;

    //Driver
    private String date_entered_uk;
    private String license_num;
    private String country_of_issue;
    private String email;
    private String cb_assoc_with_org;
    private String cb_not_assoc_with_org;
    private String name_of_employee_driver;
    private String cb_company_car;
    private String cb_car_on_business;
    private String cb_pool_vehicle;
    private String cb_occasionally;
    private String middle_initial;

    //References
    private String ref1_name;
    private String ref1_jobTitle;
    private String ref1_company;
    private String ref1_address_line1;
    private String ref1_address_line2;
    private String ref1_address_line3;
    private String ref1_phone;
    private String ref1_email;
    private String ref1_employ_start;
    private String ref1_employ_end;

    private String ref2_name;
    private String ref2_jobTitle;
    private String ref2_company;
    private String ref2_address_line1;
    private String ref2_address_line2;
    private String ref2_address_line3;
    private String ref2_phone;
    private String ref2_email;
    private String ref2_employ_start;
    private String ref2_employ_end;

    private String ref3_name;
    private String ref3_jobTitle;
    private String ref3_company;
    private String ref3_address_line1;
    private String ref3_address_line2;
    private String ref3_address_line3;
    private String ref3_phone;
    private String ref3_email;
    private String ref3_employ_start;
    private String ref3_employ_end;

    private String ref4_name;
    private String ref4_jobTitle;
    private String ref4_company;
    private String ref4_address_line1;
    private String ref4_address_line2;
    private String ref4_address_line3;
    private String ref4_phone;
    private String ref4_email;
    private String ref4_employ_start;
    private String ref4_employ_end;

    private String cb_HMRC1A;
    private String cb_HMRC1B;
    private String cb_HMRC1C;
    private String cb2_yes;
    private String cb2_no;
    private String cb3_yes;
    private String cb3_no;
    private String cb4_yes;
    private String cb4_no;
    private String cb_plan1;
    private String cb_plan2;
    private String cb_planBoth;
    private String cb6_yes;
    private String cb6_no;
    private String cb7_yes;
    private String cb7_no;
    private String cb8_yes;
    private String cb8_no;
    
    //Diversity
    private String div_name;
    private String div_A1;
    private String div_A2;
    private String div_A3;
    private String div_Aoth;

    private String div_B1;
    private String div_B2;
    private String div_B3;
    private String div_B4;
    private String div_Both;

    private String div_C1;
    private String div_C2;
    private String div_C3;
    private String div_C4;
    private String div_Coth;

    private String div_D1;
    private String div_D2;
    private String div_D3;
    private String div_Doth;

    private String div_E1;
    private String div_E2;
    private String div_Eoth;

    private String div_F1;

    private String div_GY;
    private String div_GN;
    private String div_Gdetails;

    private String div_HH;
    private String div_HG;
    private String div_HL;
    private String div_HB;
    private String div_HO;

    // Life Assurance
    private String nominee1;
    private String nominee1_address;
    private String nominee1_benefit;
    private String nominee2;
    private String nominee2_address;
    private String nominee2_benefit;
    private String nominee3;
    private String nominee3_address;
    private String nominee3_benefit;
    private String nominee4;
    private String nominee4_address;
    private String nominee4_benefit;

    




    public Person(@JsonProperty("id")  UUID id, @JsonProperty("firstName") String firstName, @JsonProperty("surname") String surname, @JsonProperty("preferredName") String prefName, @JsonProperty("gender") String gender, @JsonProperty("niNumber") String ni_num, @JsonProperty("title") String title, @JsonProperty("dob") String dob, @JsonProperty("nationality") String nationality, @JsonProperty("maritalStatus") String marital, @JsonProperty("date") String date, @JsonProperty("address") String address, @JsonProperty("town") String town, @JsonProperty("postcode") String postcode, @JsonProperty("personalMobile") String mobile, @JsonProperty("county") String county, @JsonProperty("otherPhone") String phone, @JsonProperty("contactSurname") String emerg_surname, @JsonProperty("contactForenames") String emerg_firstname, @JsonProperty("contactDayPhone") String emerg_phone, @JsonProperty("contactAddress") String emerg_address, @JsonProperty("contactTown") String emerg_town, @JsonProperty("contactPostcode") String emerg_postcode, @JsonProperty("contactTitle") String emerg_title, @JsonProperty("contactRelationship") String emerg_relationship, @JsonProperty("contactOtherPhone") String emerg_phoneother, @JsonProperty("contactCounty") String emerg_county, @JsonProperty("nokSurname") String kin_surname, @JsonProperty("nokForenames") String kin_forename, @JsonProperty("nokNationality") String kin_nationality, @JsonProperty("nokAddress") String kin_address, @JsonProperty("nokPhone") String kin_phone, @JsonProperty("nokGender") String kin_gender, @JsonProperty("nokDOB") String kin_dob, @JsonProperty("nokRelationship") String kin_relationship, @JsonProperty("specialNeeds") String physical, @JsonProperty("medicalConditions") String condition, @JsonProperty("sortCode") String sort, @JsonProperty("accountNumber") String acc_num, @JsonProperty("accountName") String acc_name, @JsonProperty("expense_sort") String expense_sort, @JsonProperty("expense_acc_name") String expense_acc_name, @JsonProperty("expense_acc_num") String expense_acc_num, @JsonProperty("criminal") String criminal, @JsonProperty("pensionName") String pension, @JsonProperty("employeeNum") String employee_num, @JsonProperty("employmentStartDate") String employment_start, @JsonProperty("dateEnteredUk") String date_entered_uk, @JsonProperty("drivingLicenseNum") String license_num, @JsonProperty("licenseCountryOfIssue") String country_of_issue, @JsonProperty("email") String email, @JsonProperty("cb_HMRC1A") String cb_HMRC1A, @JsonProperty("cb_HMRC1B") String cb_HMRC1B, @JsonProperty("cb_HMRC1C") String cb_HMRC1C, @JsonProperty("cb2_yes") String cb2_yes, @JsonProperty("cb2_no") String cb2_no, @JsonProperty("cb3_yes") String cb3_yes, @JsonProperty("cb3_no") String cb3_no, @JsonProperty("cb4_yes") String cb4_yes, @JsonProperty("cb4_no") String cb4_no, @JsonProperty("cb_plan1") String cb_plan1, @JsonProperty("cb_plan2") String cb_plan2, @JsonProperty("cb_planBoth") String cb_planBoth, @JsonProperty("cb6_yes") String cb6_yes, @JsonProperty("cb6_no") String cb6_no, @JsonProperty("cb7_yes") String cb7_yes, @JsonProperty("cb7_no") String cb7_no, @JsonProperty("cb8_yes") String cb8_yes, @JsonProperty("cb8_no") String cb8_no, @JsonProperty("language1") String language1, @JsonProperty("language2") String language2, @JsonProperty("language3") String language3, @JsonProperty("language4") String language4, @JsonProperty("language5") String language5, @JsonProperty("languageRead1") String languageRead1, @JsonProperty("languageRead2") String languageRead2, @JsonProperty("languageRead3") String languageRead3, @JsonProperty("languageRead4") String languageRead4, @JsonProperty("languageRead5") String languageRead5, @JsonProperty("languageWrite1") String languageWrite1, @JsonProperty("languageWrite2") String languageWrite2, @JsonProperty("languageWrite3") String languageWrite3, @JsonProperty("languageWrite4") String languageWrite4, @JsonProperty("languageWrite5") String languageWrite5, @JsonProperty("languageSpeak1") String languageSpeak1, @JsonProperty("languageSpeak2") String languageSpeak2, @JsonProperty("languageSpeak3") String languageSpeak3, @JsonProperty("languageSpeak4") String languageSpeak4, @JsonProperty("languageSpeak5") String languageSpeak5, @JsonProperty("educationDate1") String educationDate1, @JsonProperty("educationDate2") String educationDate2, @JsonProperty("educationLevel1") String educationLevel1, @JsonProperty("educationLevel2") String educationLevel2, @JsonProperty("qualificationsDate1") String qualificationsDate1, @JsonProperty("qualificationsDate2") String qualificationsDate2, @JsonProperty("qualificationsDate3") String qualificationsDate3, @JsonProperty("qualificationsLevel1") String qualificationsLevel1, @JsonProperty("qualificationsLevel2") String qualificationsLevel2, @JsonProperty("qualificationsLevel3") String qualificationsLevel3, @JsonProperty("cb_assoc_with_org") String cb_assoc_with_org, @JsonProperty("cb_not_assoc_with_org") String cb_not_assoc_with_org, @JsonProperty("name_of_employee_driver") String name_of_employee_driver, @JsonProperty("cb_company_car") String cb_company_car, @JsonProperty("cb_car_on_business") String cb_car_on_business, @JsonProperty("cb_pool_vehicle") String cb_pool_vehicle, @JsonProperty("cb_occasionally") String cb_occasionally, @JsonProperty("middle_initial") String middle_initial,
                  @JsonProperty("ref1_name") String ref1_name, @JsonProperty("ref1_jobTitle") String ref1_jobTitle, @JsonProperty("ref1_company") String ref1_company, @JsonProperty("ref1_address_line1") String ref1_address_line1, @JsonProperty("ref1_address_line2") String ref1_address_line2, @JsonProperty("ref1_address_line3") String ref1_address_line3, @JsonProperty("ref1_phone") String ref1_phone, @JsonProperty("ref1_email") String ref1_email, @JsonProperty("ref1_employ_start") String ref1_employ_start, @JsonProperty("ref1_employ_end") String ref1_employ_end,
                  @JsonProperty("ref2_name") String ref2_name, @JsonProperty("ref2_jobTitle") String ref2_jobTitle, @JsonProperty("ref2_company") String ref2_company, @JsonProperty("ref2_address_line1") String ref2_address_line1, @JsonProperty("ref2_address_line2") String ref2_address_line2, @JsonProperty("ref2_address_line3") String ref2_address_line3, @JsonProperty("ref2_phone") String ref2_phone, @JsonProperty("ref2_email") String ref2_email, @JsonProperty("ref2_employ_start") String ref2_employ_start, @JsonProperty("ref2_employ_end") String ref2_employ_end,
                  @JsonProperty("ref3_name") String ref3_name, @JsonProperty("ref3_jobTitle") String ref3_jobTitle, @JsonProperty("ref3_company") String ref3_company, @JsonProperty("ref3_address_line1") String ref3_address_line1, @JsonProperty("ref3_address_line2") String ref3_address_line2, @JsonProperty("ref3_address_line3") String ref3_address_line3, @JsonProperty("ref3_phone") String ref3_phone, @JsonProperty("ref3_email") String ref3_email, @JsonProperty("ref3_employ_start") String ref3_employ_start, @JsonProperty("ref3_employ_end") String ref3_employ_end,
                  @JsonProperty("ref4_name") String ref4_name, @JsonProperty("ref4_jobTitle") String ref4_jobTitle, @JsonProperty("ref4_company") String ref4_company, @JsonProperty("ref4_address_line1") String ref4_address_line1, @JsonProperty("ref4_address_line2") String ref4_address_line2, @JsonProperty("ref4_address_line3") String ref4_address_line3, @JsonProperty("ref4_phone") String ref4_phone, @JsonProperty("ref4_email") String ref4_email, @JsonProperty("ref4_employ_start") String ref4_employ_start, @JsonProperty("ref4_employ_end") String ref4_employ_end,
                  @JsonProperty("div_name") String div_name, @JsonProperty("div_A1") String div_A1, @JsonProperty("div_A2") String div_A2, @JsonProperty("div_A3") String div_A3, @JsonProperty("div_Aoth") String div_Aoth, @JsonProperty("div_B1") String div_B1, @JsonProperty("div_B2") String div_B2, @JsonProperty("div_B3") String div_B3, @JsonProperty("div_B4") String div_B4, @JsonProperty("div_Both") String div_Both,
                  @JsonProperty("div_C1") String div_C1, @JsonProperty("div_C2") String div_C2, @JsonProperty("div_C3") String div_C3, @JsonProperty("div_C4") String div_C4, @JsonProperty("div_Coth") String div_Coth, @JsonProperty("div_D1") String div_D1, @JsonProperty("div_D2") String div_D2, @JsonProperty("div_D3") String div_D3, @JsonProperty("div_Doth") String div_Doth,
                  @JsonProperty("div_E1") String div_E1, @JsonProperty("div_E2") String div_E2, @JsonProperty("div_Eoth") String div_Eoth, @JsonProperty("div_F1") String div_F1, @JsonProperty("div_GY") String div_GY, @JsonProperty("div_GN") String div_GN, @JsonProperty("div_Gdetails") String div_Gdetails,
                  @JsonProperty("div_HH") String div_HH, @JsonProperty("div_HG") String div_HG, @JsonProperty("div_HL") String div_HL, @JsonProperty("div_HB") String div_HB, @JsonProperty("div_HO") String div_HO,
                  @JsonProperty("nominee1") String nominee1, @JsonProperty("nominee1_address") String nominee1_address, @JsonProperty("nominee1_benefit") String nominee1_benefit, @JsonProperty("nominee2") String nominee2, @JsonProperty("nominee2_address") String nominee2_address, @JsonProperty("nominee2_benefit") String nominee2_benefit, @JsonProperty("nominee3") String nominee3, @JsonProperty("nominee3_address") String nominee3_address, @JsonProperty("nominee3_benefit") String nominee3_benefit, @JsonProperty("nominee4") String nominee4, @JsonProperty("nominee4_address") String nominee4_address, @JsonProperty("nominee4_benefit") String nominee4_benefit) {
        this.id = id;
        this.firstName = firstName;
        this.surname = surname;
        this.prefName = prefName;
        this.gender = gender;
        this.ni_num = ni_num;
        this.title = title;
        this.dob = dob;
        this.nationality = nationality;
        this.marital = marital;
        this.date = date;
        this.address = address;
        this.town = town;
        this.postcode = postcode;
        this.mobile = mobile;
        this.county = county;
        this.phone = phone;
        this.emerg_surname = emerg_surname;
        this.emerg_firstname = emerg_firstname;
        this.emerg_phone = emerg_phone;
        this.emerg_address = emerg_address;
        this.emerg_town = emerg_town;
        this.emerg_postcode = emerg_postcode;
        this.emerg_title = emerg_title;
        this.emerg_relationship = emerg_relationship;
        this.emerg_phoneother = emerg_phoneother;
        this.emerg_county = emerg_county;
        this.kin_surname = kin_surname;
        this.kin_forename = kin_forename;
        this.kin_nationality = kin_nationality;
        this.kin_address = kin_address;
        this.kin_phone = kin_phone;
        this.kin_gender = kin_gender;
        this.kin_dob = kin_dob;
        this.kin_relationship = kin_relationship;
        this.physical = physical;
        this.condition = condition;
        this.language1 = language1;
        this.language2 = language2;
        this.language3 = language3;
        this.language4 = language4;
        this.language5 = language5;
        this.languageWrite1 = languageWrite1;
        this.languageWrite2 = languageWrite2;
        this.languageWrite3 = languageWrite3;
        this.languageWrite4 = languageWrite4;
        this.languageWrite5 = languageWrite5;
        this.languageRead1 = languageRead1;
        this.languageRead2 = languageRead2;
        this.languageRead3 = languageRead3;
        this.languageRead4 = languageRead4;
        this.languageRead5 = languageRead5;
        this.languageSpeak1 = languageSpeak1;
        this.languageSpeak2 = languageSpeak2;
        this.languageSpeak3 = languageSpeak3;
        this.languageSpeak4 = languageSpeak4;
        this.languageSpeak5 = languageSpeak5;
        this.educationDate1 = educationDate1;
        this.educationDate2 = educationDate2;
        this.educationLevel1 = educationLevel1;
        this.educationLevel2 = educationLevel2;
        this.qualificationsDate1 = qualificationsDate1;
        this.qualificationsDate2 = qualificationsDate2;
        this.qualificationsDate3 = qualificationsDate3;
        this.qualificationsLevel1 = qualificationsLevel1;
        this.qualificationsLevel2 = qualificationsLevel2;
        this.qualificationsLevel3 = qualificationsLevel3;
        this.sort = sort;
        this.acc_num = acc_num;
        this.acc_name = acc_name;
        this.expense_sort = expense_sort;
        this.expense_acc_name = expense_acc_name;
        this.expense_acc_num = expense_acc_num;
        this.criminal = criminal;
        this.pension = pension;
        this.employee_num = employee_num;
        this.employment_start = employment_start;
        this.date_entered_uk = date_entered_uk;
        this.license_num = license_num;
        this.country_of_issue = country_of_issue;
        this.email = email;
        this.cb_assoc_with_org = cb_assoc_with_org;
        this.cb_not_assoc_with_org = cb_not_assoc_with_org;
        this.name_of_employee_driver = name_of_employee_driver;
        this.cb_company_car = cb_company_car;
        this.cb_car_on_business = cb_car_on_business;
        this.cb_pool_vehicle = cb_pool_vehicle;
        this.cb_occasionally = cb_occasionally;
        this.middle_initial = middle_initial;
        this.ref1_name = ref1_name;
        this.ref1_jobTitle = ref1_jobTitle;
        this.ref1_company = ref1_company;
        this.ref1_address_line1 = ref1_address_line1;
        this.ref1_address_line2 = ref1_address_line2;
        this.ref1_address_line3 = ref1_address_line3;
        this.ref1_phone = ref1_phone;
        this.ref1_email = ref1_email;
        this.ref1_employ_start = ref1_employ_start;
        this.ref1_employ_end = ref1_employ_end;
        this.ref2_name = ref2_name;
        this.ref2_jobTitle = ref2_jobTitle;
        this.ref2_company = ref2_company;
        this.ref2_address_line1 = ref2_address_line1;
        this.ref2_address_line2 = ref2_address_line2;
        this.ref2_address_line3 = ref2_address_line3;
        this.ref2_phone = ref2_phone;
        this.ref2_email = ref2_email;
        this.ref2_employ_start = ref2_employ_start;
        this.ref2_employ_end = ref2_employ_end;
        this.ref3_name = ref3_name;
        this.ref3_jobTitle = ref3_jobTitle;
        this.ref3_company = ref3_company;
        this.ref3_address_line1 = ref3_address_line1;
        this.ref3_address_line2 = ref3_address_line2;
        this.ref3_address_line3 = ref3_address_line3;
        this.ref3_phone = ref3_phone;
        this.ref3_email = ref3_email;
        this.ref3_employ_start = ref3_employ_start;
        this.ref3_employ_end = ref3_employ_end;
        this.ref4_name = ref4_name;
        this.ref4_jobTitle = ref4_jobTitle;
        this.ref4_company = ref4_company;
        this.ref4_address_line1 = ref4_address_line1;
        this.ref4_address_line2 = ref4_address_line2;
        this.ref4_address_line3 = ref4_address_line3;
        this.ref4_phone = ref4_phone;
        this.ref4_email = ref4_email;
        this.ref4_employ_start = ref4_employ_start;
        this.ref4_employ_end = ref4_employ_end;
        this.cb_HMRC1A = cb_HMRC1A;
        this.cb_HMRC1B = cb_HMRC1B;
        this.cb_HMRC1C = cb_HMRC1C;
        this.cb2_yes = cb2_yes;
        this.cb2_no = cb2_no;
        this.cb3_yes = cb3_yes;
        this.cb3_no = cb3_no;
        this.cb4_yes = cb4_yes;
        this.cb4_no = cb4_no;
        this.cb_plan1 = cb_plan1;
        this.cb_plan2 = cb_plan2;
        this.cb_planBoth = cb_planBoth;
        this.cb6_yes = cb6_yes;
        this.cb6_no = cb6_no;
        this.cb7_yes = cb7_yes;
        this.cb7_no = cb7_no;
        this.cb8_yes = cb8_yes;
        this.cb8_no = cb8_no;


        this.div_name = div_name;
        this.div_A1 = div_A1;
        this.div_A2 = div_A2;
        this.div_A3 = div_A3;
        this.div_Aoth = div_Aoth;

        this.div_B1 = div_B1;
        this.div_B2 = div_B2;
        this.div_B3 = div_B3;
        this.div_B4 = div_B4;
        this.div_Both = div_Both;

        this.div_C1 = div_C1;
        this.div_C2 = div_C2;
        this.div_C3 = div_C3;
        this.div_C4 = div_C4;
        this.div_Coth = div_Coth;

        this.div_D1 = div_D1;
        this.div_D2 = div_D2;
        this.div_D3 = div_D3;
        this.div_Doth = div_Doth;

        this.div_E1 = div_E1;
        this.div_E2 = div_E2;
        this.div_Eoth = div_Eoth;

        this.div_F1 = div_F1;

        this.div_GY = div_GY;
        this.div_GN = div_GN;
        this.div_Gdetails = div_Gdetails;

        this.div_HH = div_HH;
        this.div_HG = div_HG;
        this.div_HL = div_HL;
        this.div_HB = div_HB;
        this.div_HO = div_HO;


        // Life Assurance
        this.nominee1 = nominee1;
        this.nominee1_address = nominee1_address;
        this.nominee1_benefit = nominee1_benefit;
        this.nominee2 = nominee2;
        this.nominee2_address = nominee2_address;
        this.nominee2_benefit = nominee2_benefit;
        this.nominee3 = nominee3;
        this.nominee3_address = nominee3_address;
        this.nominee3_benefit = nominee3_benefit;
        this.nominee4 = nominee4;
        this.nominee4_address = nominee4_address;
        this.nominee4_benefit = nominee4_benefit;


    }

    // TODO: Add all props



    public UUID getId() {
        return id;
    }

    public String getName() {
        return firstName;
    }

    public String getSurname() {
        return surname;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getGender() {
        return gender;
    }

    public String getNi_num() {
        return ni_num;
    }

    public String getTitle() {
        return title;
    }

    public String getDob() {
        return dob;
    }

    public String getNationality() {
        return nationality;
    }

    public String getMarital() {
        return marital;
    }

    public String getDate() {
        return date;
    }

    public String getAddress() {
        return address;
    }

    public String getTown() {
        return town;
    }

    public String getPostcode() {
        return postcode;
    }

    public String getMobile() {
        return mobile;
    }

    public String getCounty() {
        return county;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmerg_surname() {
        return emerg_surname;
    }

    public String getEmerg_firstname() {
        return emerg_firstname;
    }

    public String getEmerg_phone() {
        return emerg_phone;
    }

    public String getEmerg_address() {
        return emerg_address;
    }

    public String getEmerg_town() {
        return emerg_town;
    }

    public String getEmerg_postcode() {
        return emerg_postcode;
    }

    public String getEmerg_title() {
        return emerg_title;
    }

    public String getEmerg_relationship() {
        return emerg_relationship;
    }

    public String getEmerg_phoneother() {
        return emerg_phoneother;
    }

    public String getEmerg_county() {
        return emerg_county;
    }

    public String getKin_surname() {
        return kin_surname;
    }

    public String getKin_forename() {
        return kin_forename;
    }

    public String getKin_nationality() {
        return kin_nationality;
    }

    public String getKin_address() {
        return kin_address;
    }

    public String getKin_phone() {
        return kin_phone;
    }

    public String getKin_gender() {
        return kin_gender;
    }

    public String getKin_dob() {
        return kin_dob;
    }

    public String getKin_relationship() {
        return kin_relationship;
    }

    public String getPhysical() {
        return physical;
    }

    public String getCondition() {
        return condition;
    }

    public String getSort() {
        return sort;
    }

    public String getAcc_num() {
        return acc_num;
    }

    public String getAcc_name() {
        return acc_name;
    }

    public String getExpense_sort() {
        return expense_sort;
    }

    public String getExpense_acc_name() {
        return expense_acc_name;
    }

    public String getExpense_acc_num() {
        return expense_acc_num;
    }

    public String getCriminal() {
        return criminal;
    }

    public String getPension() {
        return pension;
    }

    public String getEmployee_num() {
        return employee_num;
    }

    public String getEmployment_start() {
        return employment_start;
    }

    public String getDate_entered_uk() {
        return date_entered_uk;
    }

    public String getLicense_num() {
        return license_num;
    }

    public String getCountry_of_issue() {
        return country_of_issue;
    }

    public String getEmail() {
        return email;
    }

    public String getCb_assoc_with_org() {
        return cb_assoc_with_org;
    }

    public String getCb_not_assoc_with_org() {
        return cb_not_assoc_with_org;
    }

    public String getName_of_employee_driver() { return name_of_employee_driver; }

    public String getCb_company_car() {
        return cb_company_car;
    }

    public String getCb_car_on_business() {
        return cb_car_on_business;
    }

    public String getCb_pool_vehicle() {
        return cb_pool_vehicle;
    }

    public String getCb_occasionally() {
        return cb_occasionally;
    }

    public String getMiddle_initial() {
        return middle_initial;
    }

    public String getRef1_name() {
        return ref1_name;
    }

    public String getRef1_jobTitle() {
        return ref1_jobTitle;
    }

    public String getRef1_company() {
        return ref1_company;
    }

    public String getRef1_address_line1() {
        return ref1_address_line1;
    }

    public String getRef1_address_line2() {
        return ref1_address_line2;
    }

    public String getRef1_address_line3() {
        return ref1_address_line3;
    }

    public String getRef1_phone() {
        return ref1_phone;
    }

    public String getRef1_email() {
        return ref1_email;
    }

    public String getRef1_employ_start() {
        return ref1_employ_start;
    }

    public String getRef1_employ_end() {
        return ref1_employ_end;
    }

    public String getRef2_name() {
        return ref2_name;
    }

    public String getRef2_jobTitle() {
        return ref2_jobTitle;
    }

    public String getRef2_company() {
        return ref2_company;
    }

    public String getRef2_address_line1() {
        return ref2_address_line1;
    }

    public String getRef2_address_line2() {
        return ref2_address_line2;
    }

    public String getRef2_address_line3() {
        return ref2_address_line3;
    }

    public String getRef2_phone() {
        return ref2_phone;
    }

    public String getRef2_email() {
        return ref2_email;
    }

    public String getRef2_employ_start() {
        return ref2_employ_start;
    }

    public String getRef2_employ_end() {
        return ref2_employ_end;
    }

    public String getRef3_name() {
        return ref3_name;
    }

    public String getRef3_jobTitle() {
        return ref3_jobTitle;
    }

    public String getRef3_company() {
        return ref3_company;
    }

    public String getRef3_address_line1() {
        return ref3_address_line1;
    }

    public String getRef3_address_line2() {
        return ref3_address_line2;
    }

    public String getRef3_address_line3() {
        return ref3_address_line3;
    }

    public String getRef3_phone() {
        return ref3_phone;
    }

    public String getRef3_email() {
        return ref3_email;
    }

    public String getRef3_employ_start() {
        return ref3_employ_start;
    }

    public String getRef3_employ_end() {
        return ref3_employ_end;
    }

    public String getRef4_name() {
        return ref4_name;
    }

    public String getRef4_jobTitle() {
        return ref4_jobTitle;
    }

    public String getRef4_company() {
        return ref4_company;
    }

    public String getRef4_address_line1() {
        return ref4_address_line1;
    }

    public String getRef4_address_line2() {
        return ref4_address_line2;
    }

    public String getRef4_address_line3() {
        return ref4_address_line3;
    }

    public String getRef4_phone() {
        return ref4_phone;
    }

    public String getRef4_email() {
        return ref4_email;
    }

    public String getRef4_employ_start() {
        return ref4_employ_start;
    }

    public String getRef4_employ_end() {
        return ref4_employ_end;
    }

    public String getCb_HMRC1A() {
        return cb_HMRC1A;
    }

    public String getCb_HMRC1B() {
        return cb_HMRC1B;
    }

    public String getCb_HMRC1C() {
        return cb_HMRC1C;
    }

    public String getCb2_yes() {
        return cb2_yes;
    }

    public String getCb2_no() {
        return cb2_no;
    }

    public String getCb3_yes() {
        return cb3_yes;
    }

    public String getCb3_no() {
        return cb3_no;
    }

    public String getCb4_yes() {
        return cb4_yes;
    }

    public String getCb4_no() {
        return cb4_no;
    }

    public String getCb_plan1() {
        return cb_plan1;
    }

    public String getCb_plan2() {
        return cb_plan2;
    }

    public String getCb_planBoth() {
        return cb_planBoth;
    }

    public String getCb6_yes() {
        return cb6_yes;
    }

    public String getCb6_no() {
        return cb6_no;
    }

    public String getCb7_yes() {
        return cb7_yes;
    }

    public String getCb7_no() {
        return cb7_no;
    }

    public String getCb8_yes() {
        return cb8_yes;
    }

    public String getCb8_no() {
        return cb8_no;
    }
    public String getLanguage1() {
        return language1;
    }

    public String getLanguage2() {
        return language2;
    }

    public String getLanguage3() {
        return language3;
    }

    public String getLanguage4() {
        return language4;
    }

    public String getLanguage5() {
        return language5;
    }

    public String getLanguageWrite1() {
        return languageWrite1;
    }

    public String getLanguageWrite2() {
        return languageWrite2;
    }

    public String getLanguageWrite3() {
        return languageWrite3;
    }

    public String getLanguageWrite4() {
        return languageWrite4;
    }

    public String getLanguageWrite5() {
        return languageWrite5;
    }

    public String getLanguageRead1() {
        return languageRead1;
    }

    public String getLanguageRead2() {
        return languageRead2;
    }

    public String getLanguageRead3() {
        return languageRead3;
    }

    public String getLanguageRead4() {
        return languageRead4;
    }

    public String getLanguageRead5() {
        return languageRead5;
    }

    public String getLanguageSpeak1() {
        return languageSpeak1;
    }

    public String getLanguageSpeak2() {
        return languageSpeak2;
    }

    public String getLanguageSpeak3() {
        return languageSpeak3;
    }

    public String getLanguageSpeak4() {
        return languageSpeak4;
    }

    public String getLanguageSpeak5() {
        return languageSpeak5;
    }

    public String getEducationDate1() {
        return educationDate1;
    }

    public String getEducationDate2() {
        return educationDate2;
    }

    public String getEducationLevel1() {
        return educationLevel1;
    }

    public String getEducationLevel2() {
        return educationLevel2;
    }

    public String getQualificationsDate1() {
        return qualificationsDate1;
    }

    public String getQualificationsDate2() {
        return qualificationsDate2;
    }

    public String getQualificationsDate3() {
        return qualificationsDate3;
    }

    public String getQualificationsLevel1() {
        return qualificationsLevel1;
    }

    public String getQualificationsLevel2() {
        return qualificationsLevel2;
    }

    public String getQualificationsLevel3() {
        return qualificationsLevel3;
    }

    public String getDiv_name() {
        return div_name;
    }

    public String getDiv_A1() {
        return div_A1;
    }

    public String getDiv_A2() {
        return div_A2;
    }

    public String getDiv_A3() {
        return div_A3;
    }

    public String getDiv_Aoth() {
        return div_Aoth;
    }

    public String getDiv_B1() {
        return div_B1;
    }

    public String getDiv_B2() {
        return div_B2;
    }

    public String getDiv_B3() {
        return div_B3;
    }

    public String getDiv_B4() {
        return div_B4;
    }

    public String getDiv_Both() {
        return div_Both;
    }

    public String getDiv_C1() {
        return div_C1;
    }

    public String getDiv_C2() {
        return div_C2;
    }

    public String getDiv_C3() {
        return div_C3;
    }

    public String getDiv_C4() {
        return div_C4;
    }

    public String getDiv_Coth() {
        return div_Coth;
    }

    public String getDiv_D1() {
        return div_D1;
    }

    public String getDiv_D2() {
        return div_D2;
    }

    public String getDiv_D3() {
        return div_D3;
    }

    public String getDiv_Doth() {
        return div_Doth;
    }

    public String getDiv_E1() {
        return div_E1;
    }

    public String getDiv_E2() {
        return div_E2;
    }

    public String getDiv_Eoth() {
        return div_Eoth;
    }

    public String getDiv_F1() {
        return div_F1;
    }

    public String getDiv_GY() {
        return div_GY;
    }

    public String getDiv_GN() {
        return div_GN;
    }

    public String getDiv_Gdetails() {
        return div_Gdetails;
    }

    public String getDiv_HH() {
        return div_HH;
    }

    public String getDiv_HG() {
        return div_HG;
    }

    public String getDiv_HL() {
        return div_HL;
    }

    public String getDiv_HB() {
        return div_HB;
    }

    public String getDiv_HO() {
        return div_HO;
    }

    public String getNominee1() {
        return nominee1;
    }

    public String getNominee1_address() {
        return nominee1_address;
    }

    public String getNominee1_benefit() {
        return nominee1_benefit;
    }

    public String getNominee2() {
        return nominee2;
    }

    public String getNominee2_address() {
        return nominee2_address;
    }

    public String getNominee2_benefit() {
        return nominee2_benefit;
    }

    public String getNominee3() {
        return nominee3;
    }

    public String getNominee3_address() {
        return nominee3_address;
    }

    public String getNominee3_benefit() {
        return nominee3_benefit;
    }

    public String getNominee4() {
        return nominee4;
    }

    public String getNominee4_address() {
        return nominee4_address;
    }

    public String getNominee4_benefit() {
        return nominee4_benefit;
    }

    public String getPrefName() {
        return prefName;
    }
}