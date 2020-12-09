import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HealthCheckUpServiceService {
  constructor() {
 
  }

  healthPackages = [
    {
      category: "FrequentlyBookedTests",
      originalCategoryName : "Frequently Booked Tests",

      healthPackage: [
        {
          name: "Advanced Full Body Check",
          sellingPrice: "1499",
          marketPrice: "2999",
          discount: "45",
          img: "advanced full body check up.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
             Thyrocare : 'thyrocare.png',
           prima:'prima.png',
           healthians:'healthians.png',
          
          packageCover :[
            'Immunity Parameters: Complete Blood Count (CBC), Iron Levels, Vitamin D & B12',
            'Deficiency Check: Calcium',
            'Urine Analysis and Electrolytes Profile',
            'Organ Health Evaluation: Heart, Liver, Pancreas, Kidneys, and Thyroid',
            'Risk Assessment: Cholesterol, Diabetes, Stress, Prostate Cancer, Heart Diseases'
          ]
        },
        {
          name: "Full Body Check + Covid antibody",
          sellingPrice: "1499",
          marketPrice: "3100",
          discount: "50",
          img: "Full Body Check + Covid antibody.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
             Thyrocare : 'thyrocare.png',
           prima:'prima.png',
           healthians:'healthians.png',
          packageCover :[
            'Measurement: Complete Blood Count (CBC)',
            'Organ Health Evaluation: Heart, Liver, Pancreas, Kidneys, and Thyroid',
            'Risk Assessment: Cholesterol, Diabetes',
            'Antibody Levels: IgG',
            'Check: Whether you had COVID-19 infection in the recent past'
          ]
        },

        {
          name: " Comprehensive Full Body Check - Men",
          sellingPrice: "1499",
          marketPrice: "3100",
          discount: "50",
          img: "Comprehensive Full Body Check - Men.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
             Thyrocare : 'thyrocare.png',
           prima:'prima.png',
           healthians:'healthians.png',
          
          packageCover :[
            'Immunity Parameters: Complete Blood Count (CBC), Iron Levels, Vitamin D & B12',
            'Deficiency Check: Calcium',
            'Urine Analysis and Electrolytes Profile',
            'Organ Health Evaluation: Heart, Liver, Pancreas, Kidneys, and Thyroid',
            'Risk Assessment: Cholesterol, Diabetes, Stress, Prostate Cancer, Heart Diseases'
          ]
        },
        {
          name: " Comprehensive Full Body Check - Women",
          sellingPrice: "1499",
          marketPrice: "3100",
          discount: "50",
          img: "Comprehensive Full Body Check - Women.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
             Thyrocare : 'thyrocare.png',
           prima:'prima.png',
           healthians:'healthians.png',
          packageCover :[
            'Immunity Parameters: Complete Blood Count (CBC), Iron Levels, Vitamin D & B12',
            'Deficiency Check: Calcium',
            'Urine Analysis and Electrolytes Profile',
            'Organ Health Evaluation: Heart, Liver, Pancreas, Kidneys, and Thyroid',
            'Risk Assessment: Cholesterol, Diabetes, Stress, Prostate Cancer, Heart Diseases'
          ]
        },
        {
          name: "Full Body Check",
          sellingPrice: "1499",
          marketPrice: "3100",
          discount: "40",
          img: "Full Body Check.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
             Thyrocare : 'thyrocare.png',
           prima:'prima.png',
           healthians:'healthians.png',
         
          packageCover :[
            'Measurement: Complete Blood Counts (CBC)',
            'Organ Health Evaluation: Heart, Liver, Pancreas, Kidneys, and Thyroid',
            'Risk Assessment: Cholesterol, Diabetes'
          ]
        },
        {
          name: "Basic Full Body Check",
          sellingPrice: "1499",
          marketPrice: "855",
          discount: "30",
          img: "Basic Full Body Check.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
             Thyrocare : 'thyrocare.png',
           prima:'prima.png',
           healthians:'healthians.png',
          packageCover :[
            'Immunity Parameters: Complete Blood Count (CBC), Iron Levels, Vitamin D & B12',
            'Deficiency Check: Calcium',
            'Urine Analysis and Electrolytes Profile',
            'Organ Health Evaluation: Heart, Liver, Pancreas, Kidneys, and Thyroid',
            'Risk Assessment: Cholesterol, Diabetes, Stress, Prostate Cancer, Heart Diseases'
          ]
        },
        {
          name: "Covid-19 Antibody Test",
          sellingPrice: "1499",
          marketPrice: "2199",
          discount: "40",
          img: "Covid-19 Antibody Test.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
             Thyrocare : 'thyrocare.png',
           prima:'prima.png',
           healthians:'healthians.png',
          packageCover :[
           'IgG Antibody Levels',
           'Indicates you may have exposed to COVID-19 infection in the recent past',
           'These antibodies may protect you from future infection',
           'Note: This test checks if you had a past infection with SARS-CoV-2 virus that causes COVID-19 disease.',
          ]
        },
        {
          name: "Thyroid Profile ",
          sellingPrice: "1499",
          marketPrice: "570",
          discount: "30",
          img: "Thyroid Profile.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
             Thyrocare : 'thyrocare.png',
           prima:'prima.png',
           healthians:'healthians.png',
          packageCover :[
            'Risk Assessment: Hypothyroidism and Hyperthyroidism'
          ]
        },
      ],
    },

    {
      category: "ConditionHealthPackages",
      originalCategoryName : "Condition Health Packages",

      healthPackage: [
        {
          name: " Vitamin Profile",
          sellingPrice: "1499",
          marketPrice: "1285",
          discount: 30,
          img: "Vitamin Profile.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Diabetes Screening",
          sellingPrice: "1499",
          marketPrice: "720",
          discount: "30",
          img: "Diabetes Screening.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Pregnancy Test",
          sellingPrice: "1499",
          marketPrice: "999",
          discount: "25",
          img: "Pregnancy Test.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Kidney Function Test",
          sellingPrice: "1499",
          marketPrice: "570",
          discount: "30",
          img: "Kidney Function Test.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Dengue Screening",
          sellingPrice: "1499",
          marketPrice: "699",
          discount: "30",

          img: "Dengue Screening.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Complete Blood Count Test",
          sellingPrice: "1499",
          marketPrice: "599",
          discount: "30",

          img: "Complete Blood Count Test.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
      ],
    },
    {
      category: "LifestyleHealthPackages",
      originalCategoryName : "Lifestyle Health Packages",

      healthPackage: [
        {
          name: "Stress Assessment",
          sellingPrice: "1499",
          marketPrice: "2499",
          discount: 30,
          img: "Stress Assessment.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Smoker's Risk Assessment",
          sellingPrice: "1499",
          marketPrice: "2172",
          discount: "30",
          img: "Smokers Risk Assessment.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Alcohol Risk Assessment",
          sellingPrice: "1499",
          marketPrice: "2150",
          discount: "30",
          img: "Alcohol Risk Assessment.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Obesity Risk ",
          sellingPrice: "1499",
          marketPrice: "2650",
          discount: "30",
          img: "Obesity Risk.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Cardiac Risk Assessment",
          sellingPrice: "1499",
          marketPrice: "1570",
          discount: "30",
          img: "Cardiac Risk Assessment.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
        {
          name: "Allergy Prone",
          sellingPrice: "1499",
          marketPrice: "1370",
          discount: "30",
          img: "Allergy Prone.jpg",
          testCount: "testCount.png",
          smileLogo: "Smile.png",
          DrLogo: "doctor.png",
           homeLogo: "home.png",
          userLogo : 'userLogo.png',
          healthStyle:'healthLifeStyle.png',
          bookingWindow:'bookingWindow.png',
         immunity:'immunityLogo.jpg',
          onlineReport:'onlineReport.png',
           Thyrocare : 'thyrocare.png'
        },
      ],
    },
  ];

  getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
  }

  setLocalStorage(key,value){
    return localStorage.setItem(key,JSON.stringify(value))
  }


}
