import React, {useState} from "react";

export default function News(){


    const [article, setArticle] = useState("");
    const newsData = [['Cholesterol-Lowering Statins: Do They Help With COVID-19?',
    'https://www.healthline.com/health-news/cholesterol-lowering-statins-do-they-help-with-covid-19'],
   ['Same-Day Outpatient Procedures May Be the Future of Hip, Knee, and Other Surgeries',
    'https://www.healthline.com/health-news/same-day-outpatient-procedures-may-be-the-future-of-hip-knee-and-other-surgeries'],
   ['Key CDC Panel Recommends COVID-19 Vaccine Added to Regular Childhood Immunization Plan',
    'https://www.healthline.com/health-news/key-cdc-panel-recommends-covid-19-vaccine-added-to-regular-childhood-immunization-plan'],
   ['Cannabis and Other Drugs Increase Risk of Atrial Fibrillation (AFib)',
    'https://www.healthline.com/health-news/cannabis-and-other-drugs-increase-risk-of-atrial-fibrillation-afib'],
   ["Psychotherapy May Help You Find Relief From Chronic Back Pain — Here's How",
    'https://www.healthline.com/health-news/psychotherapy-may-help-you-find-relief-from-chronic-back-pain-heres-how'],
   ['Inflammatory Bowel Disease: This Common Herbicide May Raise Your Risk￼',
    'https://www.healthline.com/health-news/inflammatory-bowel-disease-this-common-herbicide-may-raise-your-risk'],
   ['Weight Loss Surgery: New Guidelines Are Released, Expanding Eligibility',
    'https://www.healthline.com/health-news/weight-loss-surgery-new-guidelines-are-released-expanding-eligibility'],
   ['New Guidelines Recommend These Weight Loss Drugs For People With Obesity',
    'https://www.healthline.com/health-news/new-guidelines-recommend-these-weight-loss-drugs-for-people-with-obesity'],
   ['Osteoporosis: Prunes May Help Preserve Bone Mass, Fight Inflammation',
    'https://www.healthline.com/health-news/osteopororsis-prunes-may-help-preserve-bone-mass-fight-inflammation'],
   ['Study Finds Alcohol But Not Caffeine Can Affect Success of Fertility Treatments',
    'https://www.healthline.com/health-news/study-finds-alcohol-but-not-caffeine-can-affect-success-of-fertility-treatments'],
   ['From Gen Z to Boomers: Which Generation Is Most Honest with Doctors?',
    'https://www.healthline.com/health-news/from-gen-z-to-boomers-which-generation-is-most-honest-with-doctors'],
   ['Why Experts Are Now Recommending Weight Loss Medications in Addition to Lifestyle Changes',
    'https://www.healthline.com/health-news/why-experts-are-now-recommending-weight-loss-medications-in-addition-to-lifestyle-changes'],
   ['1 in 3 Older Americans With Dementia Died a Year After Major Surgery',
    'https://www.healthline.com/health-news/1-in-3-older-americans-with-dementia-died-a-year-after-major-surgery'],
   ['Hair Straightening and Uterine Cancer: What to Know About the Risks',
    'https://www.healthline.com/health-news/hair-straightening-and-uterine-cancer-what-to-know-about-the-risks'],
   ['Need Motivation to Exercise? Find a Workout Buddy',
    'https://www.healthline.com/health-news/need-motivation-to-exercise-find-an-active-friend'],
   ['Why People Drink: Researchers Looks at Genetics, Peer Pressure and Coping Mechanisms',
    'https://www.healthline.com/health-news/why-people-drink-researcher-looks-at-genetics-peer-pressure-and-coping-mechanisms'],
   ['Less Than 5 Hours Sleep Per Night May Raise Dementia, Diabetes Risks',
    'https://www.healthline.com/health-news/less-than-5-hours-sleep-per-night-may-raise-dementia-diabetes-risks'],
   ['CVS Dropping Price of Tampons and Paying the ‘Pink Tax’: What to Know',
    'https://www.healthline.com/health-news/cvs-dropping-price-of-tampons-and-paying-the-pink-tax-what-to-know'],
   ['3 Out of 4 Teens Reported Adverse Event that Puts Them at Risk for Poor Mental Health',
    'https://www.healthline.com/health-news/3-out-of-4-teens-reported-adverse-event-that-puts-them-at-risk-for-poor-mental-health'],
   ['You Absorb Slightly More Protein From Meat vs. Plant-based Alternative',
    'https://www.healthline.com/health-news/you-only-absorb-2-more-protein-from-animals-products-vs-plants'],
   ['Talk Therapy May Improve Depression, Anxiety in People with Dementia',
    'https://www.healthline.com/health-news/talk-therapy-may-improve-depression-anxiety-in-people-with-dementia'],
   ['Hearing Aids Now Available OTC: Everything You Need to Know',
    'https://www.healthline.com/health-news/hearing-aids-now-available-otc-everything-you-need-to-know'],
   ["About 1 in 5 Americans with Diabetes Ration Their Insulin: Why That's Dangerous",
    'https://www.healthline.com/health-news/about-1-in-5-americans-with-diabetes-ration-their-insulin-why-thats-dangerous'],
   ['New Study Suggests Eliquis for Afib Can Reduce Stroke, Bleeding Risks',
    'https://www.healthline.com/health-news/new-study-suggests-eliquis-for-afib-can-reduce-stroke-bleeding-risks'],
   ['Nicotine May Block Estrogen in Women’s Brains, Making It Harder to Quit Smoking',
    'https://www.healthline.com/health-news/nicotine-may-block-estrogen-in-womens-brains-making-it-harder-to-quit-smoking'],
   ['Dietary Fiber Linked to Flare-Ups in Inflammatory Bowel Disease',
    'https://www.healthline.com/health-news/dietary-fiber-linked-to-flare-ups-in-inflammatory-bowel-disease'],
   ['Do Smartwatches Accurately Detect Atrial Fibrillation (AFib)?',
    'https://www.healthline.com/health-news/do-smartwatches-accurately-detect-atrial-fibrillation-afib'],
   ['Experts on Where Flu Cases are Rising and When to Get Your Flu Shot',
    'https://www.healthline.com/health-news/experts-on-where-flu-cases-are-rising-and-when-to-get-your-flu-shot'],
   ['New Study Debunks Old Theory That Depressed People Are Just More Realistic',
    'https://www.healthline.com/health-news/new-study-debunks-old-theory-that-depressed-people-are-just-more-realistic'],
   ['8,200 Steps a Day Can Reduce Your Risk of Sleep Apnea, Obesity, and More',
    'https://www.healthline.com/health-news/8200-steps-a-day-can-reduce-your-risk-of-sleep-apnea-obesity-and-more'],
   ['ADHD Medication Shortage: What to Know About Availability of Adderall',
    'https://www.healthline.com/health-news/adhd-medication-shortage-what-to-know-about-availability-of-adderall'],
   ['What Happens if Marijuana is No Longer Classified as Schedule 1 Drug?',
    'https://www.healthline.com/health-news/what-happens-if-marijuana-is-no-longer-classified-as-schedule-1-drug'],
   ['What Are ‘Blue Spaces’ and How Can They Benefit Mental Health?',
    'https://www.healthline.com/health-news/spending-time-in-blue-spaces-linked-to-better-mental-health'],
   ['People With Chronic Conditions Like RA Can Face Difficulty Getting Meds Due to Strict Abortion Laws',
    'https://www.healthline.com/health-news/people-with-chronic-conditions-like-ra-can-face-difficulty-getting-meds-due-to-strict-abortion-laws'],
   ['E-Cig on the Rise Among Middle and High School Students',
    'https://www.healthline.com/health-news/e-cig-on-the-rise-among-middle-and-high-school-students'],
   ["How Crohn's Disease Risk May Be Linked to Common Norovirus",
    'https://www.healthline.com/health-news/how-crohns-disease-risk-may-be-linked-to-common-norovirus'],
   ['Scientists Say They Can Detect Signs of Dementia 9 Years Before Diagnosis',
    'https://www.healthline.com/health-news/scientists-say-they-can-detect-signs-of-dementia-9-years-before-diagnosis'],
   ['Paxlovid, Drug Used for COVID-19 Treatment, May Interact With Heart Medications: What to Know',
    'https://www.healthline.com/health-news/covid-19-drug-paxlovid-may-interact-with-heart-medications-what-to-know'],
   ["A 3-Minute Test May Help Diagnose Parkinson's Disease",
    'https://www.healthline.com/health-news/a-3-minute-test-may-help-diagnose-parkinsons-disease'],
   ['Everything to Know About Potential Side Effects of the Monkeypox Vaccine',
    'https://www.healthline.com/health-news/everything-to-know-about-potential-side-effects-of-new-monkeypox-vaccine-method']]


    const randomElement= () => {
        return Math.round(Math.random() * newsData.length);
    }

    const handleClick = (e) => {
        const random_element = newsData[randomElement()];

        const component = <h2><a href = {random_element[1]}>{random_element[0]}</a></h2>;
        setArticle(component);
    }



    return(
        <div className = "news">
        <h1>News Gathering</h1>
        <button onClick = {handleClick}> Click Me</button>
        {article}
        </div>
    )
}