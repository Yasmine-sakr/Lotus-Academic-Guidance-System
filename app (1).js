const faculties = {
  "Faculty of Computers and Information & AI": {
    background: "WhatsApp Image 2026-04-24 at 2.21.09 PM.jpeg",
    specializations: ["General", "Computer Science", "Artificial Intelligence", "Cyber Security"],
    years: {
      "Year 1": {
        "Semester 1": [
          course("ENG 101", "English Communication Skills", "", 3, 0, 3),
          course("PHY 111", "Physics", "", 3, 2, 4),
          course("MAT 111", "Mathematics (1)", "", 2, 2, 3),
          course("CSC 111", "Introduction to Computer Science", "", 2, 2, 3),
          course("ETH 101", "Professional Ethics", "", 3, 0, 3),
          course("MTH 100", "Mathematics 0", "", 2, 0, 0),
        ],
        "Semester 2": [
          course("PHY 121", "Electronics", "", 2, 0, 2),
          course("DAI 221", "Introduction to Artificial Intelligence", "CSC 111", 2, 2, 3),
          course("MAT 122", "Discrete Mathematics", "MAT 111", 2, 2, 3),
          course("CSC 121", "Digital Logic Design", "PHY 111", 2, 2, 3),
          course("CYS 221", "Introduction to Cyber Security", "CSC 111", 2, 2, 3),
          course("CSC 122", "Computer Programming & Problem Solving", "CSC 111", 3, 2, 4),
        ],
      },
      "Year 2": {
        "Semester 1": [
          course("MAT 123", "Mathematics (2)", "MAT 111", 2, 2, 3),
          course("CSC 212", "Object Oriented Programming", "CSC 122", 2, 2, 3),
          course("SWE 221", "Introduction to Software Engineering", "CSC 111", 2, 2, 3),
          course("CSC 214", "Computer Architecture", "CSC 121", 2, 2, 3),
          course("CSC 215", "Computer Networks", "CSC 121", 2, 2, 3),
          course("TWR 101", "Technical Report Writing", "", 3, 0, 3),
        ],
        "Semester 2": [
          course("CSC 221", "Data Structures", "CSC 212", 2, 2, 3),
          course("CSC 222", "Web Development", "CSC 212", 2, 2, 3),
          course("MAT 121", "Probability & Statistics", "MAT 111", 2, 2, 3),
          course("CSC 211", "Algorithms Analysis & Design", "MAT 123", 2, 2, 3),
          course("CSC 213", "Operating Systems", "CSC 111", 2, 2, 3),
          course("BIO 221", "Introduction to Bioinformatics", "CSC 111", 2, 2, 3),
        ],
      },
    },
  },
  Dentistry: {
    background: "WhatsApp Image 2026-04-24 at 2.34.59 PM.jpeg",
    specializations: ["General", "Oral and Dental Medicine", "Fixed Prosthodontics", "Restorative Dentistry"],
    years: {
      "Year 1": {
        "Semester 1": [
          course("20GANT11", "Anatomy 1", "", 1, 2, 2),
          course("20GHST11", "General Histology", "", 2, 2, 3),
          course("20GBCH11", "Biochemistry", "", 2, 2, 3),
          course("210OBHD11", "Human Dentition 1", "", 2, 2, 3),
          course("211BDBM11", "Basic Dental Biomaterials", "", 2, 2, 3),
          course("20UME11", "Entrepreneurship and Innovation", "", 1, 0, 1),
        ],
        "Semester 2": [
          course("20GANT12", "Anatomy 2", "20GANT11", 1, 2, 2),
          course("20GMB12", "Microbiology & Immunology", "", 2, 2, 3),
          course("20GPHS12", "General Physiology", "", 2, 2, 3),
          course("210OBHD12", "Human Dentition 2", "210OBHD11", 2, 2, 3),
          course("211ADBM12", "Applied Dental Biomaterials", "211BDBM11", 2, 2, 3),
          course("20UMCT12", "Critical Thinking", "", 2, 0, 2),
        ],
      },
      "Year 2": {
        "Semester 1": [
          course("20GPHA21", "Pharmacology", "", 1, 2, 2),
          course("20GPTH21", "General Pathology", "", 2, 2, 3),
          course("210OB21", "Oral Biology 1", "20GHST11", 2, 2, 3),
          course("23RPROP21", "Removable Prosthodontics 1", "211ADBM12", 1, 4, 3),
          course("20GRES21", "Research Methodology", "", 2, 0, 2),
        ],
        "Semester 2": [
          course("210OB22", "Oral Biology 2", "210OB21", 2, 2, 3),
          course("28REDP22", "Restorative Esthetic Dentistry 1", "211ADBM12", 1, 4, 3),
          course("23FPROP22", "Fixed Prosthodontics 1", "211ADBM12", 1, 4, 3),
          course("23RPROP22", "Removable Prosthodontics 1", "23RPROP21", 1, 4, 3),
          course("20GMED22", "General Medicine", "20GPHA21", 1, 2, 2),
        ],
      },
    },
  },
  "Physical Therapy": {
    background: "WhatsApp Image 2026-04-24 at 2.34.59 PM.jpeg",
    specializations: ["General", "Basic Sciences", "Biomechanics", "Community Medicine"],
    years: {
      "Year 1": {
        "Semester 1": [
          course("BAS 111", "Biology", "", 1, 0, 1),
          course("BAS 112", "Biophysics", "", 2, 1, 3),
          course("BAS 113", "Pathology", "", 2, 0, 2),
          course("BAS 114", "Anatomy I", "", 2, 1, 3),
          course("BAS 115", "Physiology I", "", 2, 1, 3),
          course("BAS 116", "Histology I", "", 2, 1, 3),
          course("BAS 117", "Biochemistry I", "", 2, 1, 3),
          course("UR 111", "Technical English Language", "", 1, 0, 1),
          course("UR 112", "Introduction to Computers", "", 2, 0, 3),
        ],
        "Semester 2": [
          course("BAS 121", "Electro Physical Agents I", "BAS 112", 2, 1, 3),
          course("BAS 122", "Therapeutic Exercise I", "BAS 114", 2, 1, 3),
          course("BAS 123", "Manual Therapy", "BAS 114", 2, 1, 3),
          course("BAS 124", "Anatomy II", "BAS 114", 2, 1, 3),
          course("BAS 125", "Physiology II", "BAS 115", 2, 1, 3),
          course("BAS 126", "Tests and Measurements I", "BAS 114", 2, 1, 3),
          course("BAS 127", "Biochemistry II", "BAS 117", 2, 1, 3),
          course("BAS 128", "Biomechanics I", "BAS 114", 2, 1, 3),
        ],
      },
      "Year 2": {
        "Semester 1": [
          course("BAS 211", "Anatomy III", "BAS 114", 2, 1, 3),
          course("BAS 212", "Physiology III", "BAS 125", 2, 1, 3),
          course("BAS 213", "Electro Physical Agents II", "BAS 121", 2, 1, 3),
          course("BAS 214", "Tests and Measurements II", "BAS 126", 2, 1, 3),
          course("BAS 215", "Therapeutic Exercise II", "BAS 122", 2, 1, 3),
          course("BAS 216", "Biomechanics II", "BAS 128", 2, 1, 3),
          course("UR 213", "Critical Thinking", "", 1, 0, 1),
        ],
        "Semester 2": [
          course("BAS 221", "Anatomy IV", "BAS 114", 2, 1, 3),
          course("BAS 222", "Hydrotherapy", "BAS 112", 1, 1, 2),
          course("BAS 223", "Histology II", "BAS 116", 2, 1, 3),
          course("BAS 224", "Biomechanics III", "BAS 216", 2, 1, 3),
          course("BAS 225", "Exercise Physiology", "BAS 125", 2, 1, 3),
          course("BAS 226", "Community Medicine", "", 1, 0, 1),
          course("BAS 227", "Psychology for Handicap", "", 1, 0, 1),
          course("UR 224", "Scientific Writing", "", 2, 0, 2),
          course("UR 225", "Communication Skills", "", 1, 0, 1),
        ],
      },
    },
  },
  Nursing: {
    background: "WhatsApp Image 2026-04-24 at 2.21.09 PM (2).jpeg",
    specializations: ["General", "Adult Health Nursing", "Community Health Nursing", "Critical Care Nursing"],
    years: {
      "Year 1": {
        "Semester 1": [
          course("AINH111", "Fundamentals of Nursing (Theory)", "", 2, 2, 4),
          course("MED122", "Medical Terminology", "", 2, 0, 2),
          course("MED132", "Psychology", "", 1, 0, 1),
          course("SUP143", "Health Education", "", 1, 0, 1),
          course("CLN184", "Introduction to Clinical Practice", "", 1, 2, 2),
        ],
        "Semester 2": [
          course("AINH121", "Fundamentals of Nursing (Clinical)", "AINH111", 2, 2, 4),
          course("AINH264", "Medical Surgical Nursing", "AINH111", 2, 2, 4),
          course("SUP193", "Nutrition", "", 1, 0, 1),
          course("ELC2105", "Elective Course", "", 1, 0, 1),
        ],
      },
      "Year 2": {
        "Semester 1": [
          course("AINH311", "Adult Health Nursing", "AINH264", 2, 2, 4),
          course("MED232", "Pharmacology for Nursing", "MED122", 2, 0, 2),
          course("NUR241", "Nursing Ethics", "", 1, 0, 1),
          course("MED262", "Microbiology", "", 1, 0, 1),
        ],
        "Semester 2": [
          course("AINH364", "Advanced Medical Surgical Nursing", "AINH311", 2, 2, 4),
          course("CEN2474", "Community Health Nursing", "AINH264", 2, 2, 4),
          course("SUP2373", "Health Education", "SUP143", 1, 0, 1),
        ],
      },
    },
  },
  Engineering: {
    background: "WhatsApp Image 2026-04-24 at 2.54.30 PM.jpeg",
    specializations: [
      "General",
      "Electronics and Artificial Intelligence",
      "Mechatronics and Smart Systems",
      "Sustainable Energy",
      "Architecture and Smart Buildings",
      "Construction Engineering",
    ],
    years: {
      "Preparatory Year": {
        "Semester 1": [
          course("BAS 011", "Math (1)", "", 3, 2, 4),
          course("BAS 012", "Physics (1)", "", 2, 2, 3),
          course("BAS 013", "Chemistry", "", 2, 2, 3),
          course("MEC 011", "Production Engineering", "", 2, 2, 3),
          course("ENG 011", "English Language (1)", "", 2, 0, 2),
          course("UNR 071", "Human Rights", "", 2, 0, 2),
        ],
        "Semester 2": [
          course("BAS 014", "Math (2)", "BAS 011", 3, 2, 4),
          course("BAS 015", "Physics (2)", "BAS 012", 2, 2, 3),
          course("ENG 012", "Engineering Graphics", "", 1, 3, 3),
          course("MEC 012", "Mechanics (Statics & Dynamics)", "BAS 011", 3, 1, 3),
          course("ELE 061", "Intro. to Computers", "", 2, 2, 3),
          course("ENG 071", "Technical Writing", "ENG 011", 2, 0, 2),
        ],
      },
      "Year 1": {
        "Semester 1": [
          course("UNR 171", "Law and Human Rights", "", 2, 0, 2),
          course("BAS 111", "Mathematics (3)", "BAS 013", 2, 2, 3),
          course("ELE 161", "Computer Programming", "ELE 061", 2, 2, 3),
          course("ELE 151", "Logical and Digital Circuits", "", 2, 1, 3),
          course("CIV 111", "Building Construction", "", 2, 2, 3),
          course("CIV 112", "Structural Analysis (1)", "MEC 012", 2, 2, 3),
          course("MEC 143", "Material Science", "", 2, 1, 3),
        ],
        "Semester 2": [
          course("ENG 171", "Technical Report Writing", "UNR 071", 2, 0, 2),
          course("BAS 112", "Mathematics (4)", "BAS 111", 2, 2, 3),
          course("ELE 157", "Probability Theory", "BAS 111", 2, 2, 3),
          course("CIV 121", "Surveying (1)", "BAS 111", 2, 2, 3),
          course("CIV 122", "Civil Drawing", "ENG 012", 1, 3, 3),
          course("CIV 123", "Properties of Materials", "MEC 143", 2, 1, 3),
          course("MEC 134", "Thermodynamics and Heat Transfer", "BAS 014", 2, 2, 3),
          course("ENG 142", "Fundamentals of Engineering Design", "", 2, 1, 2),
          course("ARC 122", "Architectural Design Studio", "ENG 012", 1, 3, 3),
        ],
      },
      "Year 2": {
        "Semester 1": [
          course("MEC 141", "Stress Analysis", "MEC 012", 2, 2, 3),
          course("ELE 152", "Electrical and Electronic Engineering", "", 2, 1, 3),
          course("ARC 131", "Modern Building Technologies", "", 2, 1, 3),
          course("CIV 131", "Engineering Geology", "", 2, 0, 2),
        ],
        "Semester 2": [
          course("MEC 122", "Engineering Numerical Analysis", "ELE 161", 2, 2, 3),
          course("CIV 132", "Plane Surveying", "BAS 111", 2, 3, 3),
          course("CIV 134", "Structural Analysis and Mechanics", "CIV 112", 2, 1, 3),
          course("ELE 121", "Fundamentals of Biomedical Engineering", "", 2, 0, 2),
        ],
      },
    },
  },
  "Health Sciences": {
    background: "WhatsApp Image 2026-04-24 at 2.52.44 PM.jpeg",
    specializations: [
      "Medical Laboratory Technology",
      "Radiology and Medical Imaging Technology",
      "Dental Prosthetics Technology",
      "Biomedical Equipment Technology",
    ],
    years: {
      "Year 1": {
        "Semester 1": [
          course("LUNI11001", "English Language", "", 1, 0, 2),
          course("ICSI1003", "Introduction to Information Technology", "", 1, 0, 2),
          course("SSC11005", "Total Quality Management", "", 1, 0, 2),
          course("AHST11009", "Physical and Organic Chemistry", "", 1, 0, 2),
          course("DEPRI1013", "Medical Terminology", "", 1, 0, 2),
          course("DEPRI1015", "Basic Anatomy", "", 1, 0, 2),
        ],
        "Semester 2": [
          course("LUNI12002", "Scientific Thinking and Writing", "LUNI11001", 1, 0, 2),
          course("ICSI2004", "Introduction to Computer Science", "ICSI1003", 1, 0, 2),
          course("SSC12006", "Health Informatics", "", 1, 0, 2),
          course("AHST12010", "Basic Physics", "", 1, 0, 2),
          course("DEPRI2014", "Basic Physiology", "", 1, 0, 2),
          course("DEPRI2016", "Basic Biochemistry", "AHST11009", 1, 0, 2),
        ],
      },
      "Year 2": {
        "Semester 1": [
          course("LUNI23051", "Ethics and Human Rights", "", 1, 0, 2),
          course("ICSI23055", "Artificial Intelligence Application", "ICSI2004", 1, 0, 2),
          course("SSC23059", "Lab Accreditation", "SSC11005", 1, 0, 2),
          course("AHST23063", "Biostatistics", "AHST11009", 1, 0, 2),
          course("DEPR23067", "Basic Histology", "", 1, 0, 2),
          course("TML23071", "Metabolism of Carbohydrate and Lipids", "", 1, 0, 2),
        ],
        "Semester 2": [
          course("LUNI24052", "Leadership and Management", "", 1, 0, 2),
          course("ICSI24056", "Mobile Application", "ICSI2004", 1, 0, 2),
          course("ICSI24058", "Web Design", "ICSI2004", 1, 0, 2),
          course("SSC24060", "Critical Thinking", "", 1, 0, 2),
          course("AHST24064", "First Aid and Emergency Care", "", 1, 0, 2),
          course("DEPR24068", "Basic Cell Biology", "", 1, 0, 2),
        ],
      },
    },
    specializationCourses: {
      "Medical Laboratory Technology": {
        "Year 1": {
          "Semester 1": [
            course("TML11017", "Analytical Chemistry", "AHST11009", 1, 2, 2),
          ],
          "Semester 2": [
            course("TML12018", "Histopathology", "DEPRI1015", 1, 2, 2),
          ],
        },
      },
      "Radiology and Medical Imaging Technology": {
        "Year 1": {
          "Semester 1": [
            course("TRMI11021", "Introduction to Radiology", "AHST12010", 1, 2, 2),
          ],
          "Semester 2": [
            course("TRMI12022", "Radiology Information Systems", "ICSI1003", 1, 2, 2),
          ],
        },
      },
      "Dental Prosthetics Technology": {
        "Year 1": {
          "Semester 1": [
            course("TDPM11019", "Introduction of Dentistry", "DEPRI1013", 1, 2, 2),
          ],
          "Semester 2": [
            course("TDPM12020", "Head and Neck Anatomy", "DEPRI1015", 1, 2, 2),
          ],
        },
      },
      "Biomedical Equipment Technology": {
        "Year 1": {
          "Semester 1": [
            course("TBME11023", "Introduction to Biomedical Equipment", "AHST12010", 1, 2, 2),
          ],
          "Semester 2": [
            course("TBME12024", "Basic Electronics for Biomedical Equipment", "AHST12010", 1, 2, 2),
          ],
        },
      },
    },
  },
  "Economics and Political Science & Management": {
    background: "WhatsApp Image 2026-04-24 at 2.21.10 PM (2).jpeg",
    specializations: ["General", "Accounting", "Finance and Banking", "Economics", "Political Science", "Management"],
    years: {
      "Year 1": {
        "Semester 1": [
          course("ENG 101", "English Communication Skills", "", 3, 0, 3),
          course("ACC 111", "Principles of Financial Accounting", "", 3, 1, 3),
          course("ECO 111", "Microeconomics", "", 3, 1, 3),
          course("BUS 111", "Principles of Management", "", 3, 1, 3),
          course("CSC 112", "Computer Applications", "", 3, 1, 3),
        ],
        "Semester 2": [
          course("ETH 101", "Professional Ethics", "", 2, 0, 2),
          course("ACC 121", "Managerial Accounting", "", 3, 1, 3),
          course("ECO 121", "Macroeconomics", "ECO 111", 3, 1, 3),
          course("TRD 121", "Business Statistics", "", 3, 1, 3),
          course("TRD 122", "Mathematics for Finance", "", 3, 1, 3),
        ],
      },
      "Year 2": {
        "Semester 1": [
          course("TWR 101", "Technical Report Writing", "", 3, 0, 3),
          course("BUS 211", "Production and Operations Management", "BUS 111", 3, 1, 3),
          course("POL 211", "Political Science", "", 3, 1, 3),
          course("ECO 211", "Public Finance", "", 3, 1, 3),
          course("ACC 211", "Corporate Accounting", "ACC 111", 3, 1, 3),
        ],
        "Semester 2": [
          course("BNK 221", "Insurance and Risk Management", "TRD 122", 3, 1, 3),
          course("ECO 221", "Finance and Investment", "ECO 121", 3, 1, 3),
          course("ECO 222", "Economic Feasibility Studies", "ACC 111", 3, 1, 3),
          course("ACC 222", "Cost Accounting", "ACC 111", 3, 1, 3),
        ],
      },
    },
  },
};

let selectedFaculty = "";
let currentLanguage = localStorage.getItem("language") || "en";

const translations = {
  en: {
    appTitle: "Lotus Academic Guidance System",
    home: "Home",
    dashboard: "Dashboard",
    selectFaculty: "Select Your Faculty",
    selectAcademicData: "Select Academic Data",
    year: "Year",
    semester: "Semester",
    specialization: "Specialization",
    continue: "Continue",
    studentLogin: "Student Login",
    studentNamePlaceholder: "Enter your name",
    emailPlaceholder: "University Email",
    passwordPlaceholder: "Password",
    login: "Login",
    advisor: "Registration Advisor",
    studyGuide: "Study Guide",
    changeFaculty: "Change Faculty",
    back: "Back",
    courseCode: "Course Code",
    courseTitle: "Course Title",
    prerequisites: "Prerequisites",
    lecture: "Lecture",
    lab: "Lab / Practical",
    creditHours: "Credit Hours",
    gpa: "GPA",
    enterGpa: "Enter your GPA",
    failedSubjects: "Failed Subjects",
    getRecommendation: "Get Recommendation",
    facultyPrefix: "Faculty",
    welcome: "Welcome",
    selectFacultyFirst: "Select your faculty first",
    enterName: "Enter your name",
    enterUniversityEmail: "Enter your university email",
    invalidUniversityEmail: "Invalid university email. Please use your official Lotus University email.",
    invalidPassword: "Invalid password format. Please try again.",
    loginRequired: "Please login first.",
    recommended: "Recommended",
    blocked: "Blocked",
    noPrerequisite: "No prerequisite",
    prerequisite: "Prerequisite",
    firstSemesterNote: "New student: GPA is not required for Year 1 Semester 1.",
    firstSemesterCoursesTitle: "Your registered courses for this semester",
    lightCourses: "Recommended: Light courses + retake failed subjects first.",
    advancedCourses: "Recommended: Advanced courses allowed if prerequisites are completed.",
    totalRecommendedHours: "Total recommended hours",
    noSelectionYet: "Choose your faculty and academic data first.",
    "Preparatory Year": "Preparatory Year",
    "Year 1": "Year 1",
    "Year 2": "Year 2",
    "Semester 1": "Semester 1",
    "Semester 2": "Semester 2",
    General: "General",
  },
  ar: {
    appTitle: "نظام لوتس للإرشاد الأكاديمي",
    home: "الرئيسية",
    dashboard: "لوحة التحكم",
    selectFaculty: "اختاري الكلية",
    selectAcademicData: "اختاري البيانات الأكاديمية",
    year: "السنة",
    semester: "الترم",
    specialization: "التخصص",
    continue: "متابعة",
    studentLogin: "تسجيل دخول الطالب",
    studentNamePlaceholder: "اكتبي اسمك",
    emailPlaceholder: "الإيميل الجامعي",
    passwordPlaceholder: "كلمة المرور",
    login: "دخول",
    advisor: "مرشد التسجيل",
    studyGuide: "الدليل الدراسي",
    changeFaculty: "تغيير الكلية",
    back: "رجوع",
    courseCode: "كود المقرر",
    courseTitle: "اسم المقرر",
    prerequisites: "المتطلب السابق",
    lecture: "محاضرة",
    lab: "عملي",
    creditHours: "ساعات معتمدة",
    gpa: "المعدل التراكمي GPA",
    enterGpa: "اكتبي المعدل التراكمي GPA",
    failedSubjects: "المواد الراسبة",
    getRecommendation: "اعرض التوصية",
    facultyPrefix: "الكلية",
    welcome: "أهلاً",
    selectFacultyFirst: "اختاري الكلية الأول",
    enterName: "اكتبي اسمك",
    enterUniversityEmail: "اكتبي الإيميل الجامعي",
    invalidUniversityEmail: "الإيميل الجامعي غير صحيح. استخدمي إيميل جامعة لوتس الرسمي.",
    invalidPassword: "صيغة كلمة المرور غير صحيحة، حاولي مرة أخرى.",
    loginRequired: "لازم تسجلي دخول الأول.",
    recommended: "مقترح",
    blocked: "غير متاح",
    noPrerequisite: "لا يوجد متطلب سابق",
    prerequisite: "المتطلب السابق",
    firstSemesterNote: "طالبة جديدة: لا تحتاجين إدخال GPA في سنة أولى ترم أول.",
    firstSemesterCoursesTitle: "موادك المسجلة لهذا الترم",
    lightCourses: "المقترح: مواد خفيفة + إعادة المواد الراسبة أولاً.",
    advancedCourses: "المقترح: يمكن تسجيل مواد متقدمة إذا كانت المتطلبات مكتملة.",
    totalRecommendedHours: "إجمالي الساعات المقترحة",
    noSelectionYet: "اختاري الكلية والبيانات الأكاديمية الأول.",
    "Preparatory Year": "السنة الإعدادية",
    "Year 1": "السنة الأولى",
    "Year 2": "السنة الثانية",
    "Semester 1": "الترم الأول",
    "Semester 2": "الترم الثاني",
    General: "عام",
  },
};

function course(code, title, prerequisite, lecture, lab, creditHours) {
  return { code, title, prerequisite, lecture, lab, creditHours };
}

function mergeCourses(baseCourses, extraCourses = []) {
  const usedCodes = new Set(baseCourses.map((item) => item.code));
  const merged = [...baseCourses];

  extraCourses.forEach((item) => {
    if (!usedCodes.has(item.code)) {
      usedCodes.add(item.code);
      merged.push(item);
    }
  });

  return merged;
}

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function optionLabel(value) {
  return t(value);
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((item) => {
    item.textContent = t(item.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((item) => {
    item.placeholder = t(item.dataset.i18nPlaceholder);
  });

  const gpaInput = document.getElementById("gpa");
  if (gpaInput) gpaInput.placeholder = t("gpa");

  if (localStorage.getItem("studentName")) {
    setDashboardText();
  }

  const faculty = localStorage.getItem("faculty") || selectedFaculty;
  if (faculty && faculties[faculty]) {
    fillYears(faculty);
    fillSpecializations(faculty);
  }
}

function hasAcademicSelection() {
  return Boolean(localStorage.getItem("faculty") && localStorage.getItem("year") && localStorage.getItem("semester"));
}

function isLoggedIn() {
  return Boolean(
    sessionStorage.getItem("isLoggedIn") === "true" &&
      localStorage.getItem("studentName") &&
      localStorage.getItem("studentEmail"),
  );
}

function isValidPassword(password) {
  return /[A-Za-z]/.test(password) && /\d/.test(password) && /[@#$%^]/.test(password);
}

function requireLogin() {
  if (isLoggedIn()) return true;

  alert(t("loginRequired"));
  show("loginPage");
  return false;
}

function isFirstYearFirstSemester() {
  return localStorage.getItem("year") === "Year 1" && localStorage.getItem("semester") === "Semester 1";
}

function setDashboardText() {
  const name = localStorage.getItem("studentName") || "";
  document.getElementById("welcomeText").innerText = `${t("welcome")}, ${name}`;
  document.getElementById("selectedInfo").innerText = selectedSummary();
}

function show(pageId) {
  const protectedPages = ["dashboardPage", "guidePage", "advisorPage"];
  if (protectedPages.includes(pageId) && !isLoggedIn()) {
    alert(t("loginRequired"));
    pageId = "loginPage";
  }

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active-page");
  });
  document.getElementById(pageId).classList.add("active-page");
}

function init() {
  const languageSelect = document.getElementById("languageSelect");
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener("change", () => {
    currentLanguage = languageSelect.value;
    localStorage.setItem("language", currentLanguage);
    applyLanguage();
  });

  const facultyCards = document.getElementById("facultyCards");
  const names = Object.keys(faculties);
  facultyCards.innerHTML = names
    .map((name, index) => `<div class="card" data-faculty-index="${index}">${name}</div>`)
    .join("");

  document.querySelectorAll("[data-faculty-index]").forEach((card) => {
    card.addEventListener("click", () => selectFaculty(names[Number(card.dataset.facultyIndex)]));
  });

  applyLanguage();
}

function selectFaculty(name) {
  selectedFaculty = name;
  localStorage.setItem("faculty", name);
  localStorage.removeItem("studentName");
  localStorage.removeItem("studentEmail");
  sessionStorage.removeItem("isLoggedIn");

  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("selected", card.textContent.trim() === name);
  });

  fillYears(name);
  fillSpecializations(name);
  document.getElementById("yearSection").style.display = "flex";
}

function fillYears(name) {
  const yearSelect = document.getElementById("yearSelect");
  const currentYear = yearSelect.value || localStorage.getItem("year");
  yearSelect.innerHTML = Object.keys(faculties[name].years)
    .map((year) => `<option value="${year}">${optionLabel(year)}</option>`)
    .join("");
  if (currentYear && faculties[name].years[currentYear]) {
    yearSelect.value = currentYear;
  }
  fillSemesters();
  yearSelect.onchange = fillSemesters;
}

function fillSemesters() {
  const faculty = localStorage.getItem("faculty") || selectedFaculty;
  const year = document.getElementById("yearSelect").value;
  const semesterSelect = document.getElementById("semesterSelect");
  const currentSemester = semesterSelect.value || localStorage.getItem("semester");
  semesterSelect.innerHTML = Object.keys(faculties[faculty].years[year])
    .map((semester) => `<option value="${semester}">${optionLabel(semester)}</option>`)
    .join("");
  if (currentSemester && faculties[faculty].years[year][currentSemester]) {
    semesterSelect.value = currentSemester;
  }
}

function fillSpecializations(name) {
  const specializationSelect = document.getElementById("specializationSelect");
  const currentSpecialization = specializationSelect.value || localStorage.getItem("specialization");
  document.getElementById("specializationSelect").innerHTML = faculties[name].specializations
    .map((specialization) => `<option value="${specialization}">${optionLabel(specialization)}</option>`)
    .join("");
  if (currentSpecialization && faculties[name].specializations.includes(currentSpecialization)) {
    specializationSelect.value = currentSpecialization;
  }
}

function goToLogin() {
  if (!localStorage.getItem("faculty")) {
    alert(t("selectFacultyFirst"));
    return;
  }

  localStorage.setItem("year", document.getElementById("yearSelect").value);
  localStorage.setItem("semester", document.getElementById("semesterSelect").value);
  localStorage.setItem("specialization", document.getElementById("specializationSelect").value);
  localStorage.removeItem("studentName");
  localStorage.removeItem("studentEmail");
  sessionStorage.removeItem("isLoggedIn");
  show("loginPage");
}

function login() {
  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  if (name === "") {
    alert(t("enterName"));
    return;
  }

  if (email === "") {
    alert(t("enterUniversityEmail"));
    return;
  }

  if (!email.endsWith("@lum.edu.eg")) {
    alert(t("invalidUniversityEmail"));
    return;
  }

  if (!isValidPassword(password)) {
    alert(t("invalidPassword"));
    return;
  }

  localStorage.setItem("studentName", name);
  localStorage.setItem("studentEmail", email);
  sessionStorage.setItem("isLoggedIn", "true");
  setDashboardText();
  show("dashboardPage");
}

function selectedSummary() {
  return `${localStorage.getItem("faculty")} | ${optionLabel(localStorage.getItem("specialization"))} | ${optionLabel(localStorage.getItem("year"))} | ${optionLabel(localStorage.getItem("semester"))}`;
}

function selectedCourses() {
  const faculty = localStorage.getItem("faculty");
  const year = localStorage.getItem("year");
  const semester = localStorage.getItem("semester");
  const specialization = localStorage.getItem("specialization");
  const baseCourses = faculties[faculty].years[year][semester] || [];
  const specializationCourses =
    faculties[faculty].specializationCourses?.[specialization]?.[year]?.[semester] || [];

  return mergeCourses(baseCourses, specializationCourses);
}

function allFacultyCourses(faculty) {
  const baseCourses = Object.values(faculties[faculty].years)
    .flatMap((year) => Object.values(year))
    .flat();
  const specializationCourses = Object.values(faculties[faculty].specializationCourses || {})
    .flatMap((years) => Object.values(years))
    .flatMap((semesters) => Object.values(semesters))
    .flat();

  return mergeCourses(baseCourses, specializationCourses);
}

function setContentBackground(pageId) {
  const faculty = localStorage.getItem("faculty");
  const page = document.getElementById(pageId);
  page.style.backgroundImage = `url('${faculties[faculty].background}')`;
}

function goGuide() {
  if (!requireLogin()) return;

  if (!hasAcademicSelection()) {
    alert(t("noSelectionYet"));
    show("homePage");
    return;
  }

  setContentBackground("guidePage");
  document.getElementById("guideTitle").innerText = selectedSummary();
  renderGuideTable();
  show("guidePage");
}

function renderGuideTable() {
  document.getElementById("guideTable").innerHTML = selectedCourses()
    .map(
      (item) => `
        <tr>
          <td>${item.code}</td>
          <td>${item.title}</td>
          <td>${item.prerequisite || "-----"}</td>
          <td>${item.lecture}</td>
          <td>${item.lab}</td>
          <td>${item.creditHours}</td>
        </tr>
      `,
    )
    .join("");
}

function goAdvisor() {
  if (!requireLogin()) return;

  if (!hasAcademicSelection()) {
    alert(t("noSelectionYet"));
    show("homePage");
    return;
  }

  const faculty = localStorage.getItem("faculty");
  setContentBackground("advisorPage");
  document.getElementById("facultyName").innerText = `${t("facultyPrefix")}: ${selectedSummary()}`;

  const gpaField = document.getElementById("gpaField");
  const gpaInput = document.getElementById("gpa");
  const failedSubjectsField = document.getElementById("failedSubjectsField");
  const failedSubjects = document.getElementById("failedSubjects");
  const hideGpa = isFirstYearFirstSemester();
  gpaField.style.display = hideGpa ? "none" : "block";
  if (hideGpa) gpaInput.value = "";
  failedSubjectsField.style.display = hideGpa ? "none" : "block";
  if (hideGpa) failedSubjects.selectedIndex = -1;

  failedSubjects.innerHTML = allFacultyCourses(faculty)
    .map((item) => `<option value="${item.code}">${item.code} - ${item.title}</option>`)
    .join("");

  document.getElementById("result").innerHTML = "";
  show("advisorPage");
}

function recommend() {
  const isNewStudent = isFirstYearFirstSemester();

  if (isNewStudent) {
    const cards = selectedCourses()
      .map(
        (item) => `
          <div class="recommend-card">
            <h4>${item.code} - ${item.title}</h4>
            <p><strong>${t("recommended")}</strong></p>
          </div>
        `,
      )
      .join("");

    document.getElementById("result").innerHTML = `
      <h3>${t("firstSemesterCoursesTitle")}</h3>
      <div class="recommendation-grid">${cards}</div>
    `;
    return;
  }

  const gpaValue = document.getElementById("gpa").value;
  const gpa = Number(gpaValue);

  if (gpaValue === "") {
    alert(t("enterGpa"));
    return;
  }

  const failed = [...document.getElementById("failedSubjects").selectedOptions].map((option) => option.value);
  const failedSet = new Set(failed);
  const maxHours = gpa < 2 ? 12 : 18;
  let totalHours = 0;

  const repeatedCourses = allFacultyCourses(localStorage.getItem("faculty")).filter((item) =>
    failedSet.has(item.code),
  );

  const recommendations = [...repeatedCourses, ...selectedCourses()].filter(
    (item, index, list) => list.findIndex((courseItem) => courseItem.code === item.code) === index,
  );

  const cards = recommendations
    .map((item) => {
      const prerequisiteFailed = item.prerequisite && failedSet.has(item.prerequisite);
      const canAddHours = totalHours + item.creditHours <= maxHours;
      const isRepeat = failedSet.has(item.code);
      const allowed = (isRepeat || !prerequisiteFailed) && canAddHours;

      if (allowed) totalHours += item.creditHours;

      return `
        <div class="recommend-card ${allowed ? "" : "blocked"}">
          <h4>${item.code} - ${item.title}</h4>
          <p><strong>${allowed ? t("recommended") : t("blocked")}</strong></p>
          <p>${item.prerequisite ? `${t("prerequisite")}: ${item.prerequisite}` : t("noPrerequisite")}</p>
          <p>${item.creditHours} ${t("creditHours")}</p>
        </div>
      `;
    })
    .join("");

  const note = gpa < 2 ? t("lightCourses") : t("advancedCourses");

  document.getElementById("result").innerHTML = `
    <h3>${note}</h3>
    <p>${t("totalRecommendedHours")}: ${totalHours} / ${maxHours}</p>
    <div class="recommendation-grid">${cards}</div>
  `;
}

init();
