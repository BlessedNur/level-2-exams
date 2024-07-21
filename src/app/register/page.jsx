"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
const page = () => {
  const presentDay = new Date().getDate();
  const preseneYear = new Date().getFullYear();
  const [day, setDay] = useState(presentDay);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(preseneYear);
  const [showDayDropdown, setShowDayDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const dayDropdownRef = useRef(null);
  const monthDropdownRef = useRef(null);
  const yearDropdownRef = useRef(null);
  const [presentMonth, setPresentMonth] = useState("");
  const [selectedNationality, setSelectedNationality] = useState("");

  const nationalities = [
    "Afghan",
    "Albanian",
    "Algerian",
    "American",
    "Andorran",
    "Angolan",
    "Antiguans",
    "Argentinean",
    "Armenian",
    "Australian",
    "Austrian",
    "Azerbaijani",
    "Bahamian",
    "Bahraini",
    "Bangladeshi",
    "Barbadian",
    "Barbudans",
    "Batswana",
    "Belarusian",
    "Belgian",
    "Belizean",
    "Beninese",
    "Bhutanese",
    "Bolivian",
    "Bosnian",
    "Brazilian",
    "British",
    "Bruneian",
    "Bulgarian",
    "Burkinabe",
    "Burmese",
    "Burundian",
    "Cambodian",
    "Cameroonian",
    "Canadian",
    "Cape Verdean",
    "Central African",
    "Chadian",
    "Chilean",
    "Chinese",
    "Colombian",
    "Comoran",
    "Congolese",
    "Costa Rican",
    "Croatian",
    "Cuban",
    "Cypriot",
    "Czech",
    "Danish",
    "Djibouti",
    "Dominican",
    "Dutch",
    "East Timorese",
    "Ecuadorean",
    "Egyptian",
    "Emirian",
    "Equatorial Guinean",
    "Eritrean",
    "Estonian",
    "Ethiopian",
    "Fijian",
    "Filipino",
    "Finnish",
    "French",
    "Gabonese",
    "Gambian",
    "Georgian",
    "German",
    "Ghanaian",
    "Greek",
    "Grenadian",
    "Guatemalan",
    "Guinea-Bissauan",
    "Guinean",
    "Guyanese",
    "Haitian",
    "Herzegovinian",
    "Honduran",
    "Hungarian",
    "I-Kiribati",
    "Icelander",
    "Indian",
    "Indonesian",
    "Iranian",
    "Iraqi",
    "Irish",
    "Israeli",
    "Italian",
    "Ivorian",
    "Jamaican",
    "Japanese",
    "Jordanian",
    "Kazakhstani",
    "Kenyan",
    "Kittian and Nevisian",
    "Kuwaiti",
    "Kyrgyz",
    "Laotian",
    "Latvian",
    "Lebanese",
    "Liberian",
    "Libyan",
    "Liechtensteiner",
    "Lithuanian",
    "Luxembourger",
    "Macedonian",
    "Malagasy",
    "Malawian",
    "Malaysian",
    "Maldivan",
    "Malian",
    "Maltese",
    "Marshallese",
    "Mauritanian",
    "Mauritian",
    "Mexican",
    "Micronesian",
    "Moldovan",
    "Monacan",
    "Mongolian",
    "Moroccan",
    "Mosotho",
    "Motswana",
    "Mozambican",
    "Namibian",
    "Nauruan",
    "Nepalese",
    "New Zealander",
    "Ni-Vanuatu",
    "Nicaraguan",
    "Nigerian",
    "Nigerien",
    "North Korean",
    "Northern Irish",
    "Norwegian",
    "Omani",
    "Pakistani",
    "Palauan",
    "Panamanian",
    "Papua New Guinean",
    "Paraguayan",
    "Peruvian",
    "Polish",
    "Portuguese",
    "Qatari",
    "Romanian",
    "Russian",
    "Rwandan",
    "Saint Lucian",
    "Salvadoran",
    "Samoan",
    "San Marinese",
    "Sao Tomean",
    "Saudi",
    "Scottish",
    "Senegalese",
    "Serbian",
    "Seychellois",
    "Sierra Leonean",
    "Singaporean",
    "Slovakian",
    "Slovenian",
    "Solomon Islander",
    "Somali",
    "South African",
    "South Korean",
    "Spanish",
    "Sri Lankan",
    "Sudanese",
    "Surinamer",
    "Swazi",
    "Swedish",
    "Swiss",
    "Syrian",
    "Taiwanese",
    "Tajik",
    "Tanzanian",
    "Thai",
    "Togolese",
    "Tongan",
    "Trinidadian or Tobagonian",
    "Tunisian",
    "Turkish",
    "Tuvaluan",
    "Ugandan",
    "Ukrainian",
    "Uruguayan",
    "Uzbekistani",
    "Venezuelan",
    "Vietnamese",
    "Welsh",
    "Yemenite",
    "Zambian",
    "Zimbabwean",
  ];

  useEffect(() => {
    const monthNumber = new Date().getMonth() + 1;
    console.log(monthNumber);
    switch (monthNumber) {
      case 1:
        setPresentMonth("January");
        break;
      case 2:
        setPresentMonth("February");
        break;
      case 3:
        setPresentMonth("March");
        break;
      case 4:
        setPresentMonth("April");
        break;
      case 5:
        setPresentMonth("May");
        break;
      case 6:
        setPresentMonth("June");
        break;
      case 7:
        setPresentMonth("July");
        break;
      case 8:
        setPresentMonth("August");
        break;
      case 9:
        setPresentMonth("September");
        break;
      case 10:
        setPresentMonth("October");
        break;
      case 11:
        setPresentMonth("November");
        break;
      case 12:
        setPresentMonth("December");
        break;
      default:
        setPresentMonth("");
        break;
    }
  }, [presentMonth]);

  useEffect(() => {
    setMonth(presentMonth);
  }, [presentMonth]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dayDropdownRef.current &&
        !dayDropdownRef.current.contains(event.target)
      ) {
        setShowDayDropdown(false);
      }
      if (
        monthDropdownRef.current &&
        !monthDropdownRef.current.contains(event.target)
      ) {
        setShowMonthDropdown(false);
      }
      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target)
      ) {
        setShowYearDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    { length: 101 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <main className={style.display}>
      <section className={style.formFrame}>
        <div className={style.left}>
          <h1>Sign up</h1>
        </div>
        <div className={style.right}>
          <div className={style.intro}>
            <h2>New User?</h2>
            <p>Use this form below to create your account</p>
          </div>
          <i class={`fa-regular fa-user-circle ${style.userIcon}`}></i>
          <form action="">
            <div className={style.leftform}>
              <div className={style.line}>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="E.g John" />
              </div>
              <div className={`${style.line} ${style.nat}`}>
                <label htmlFor="nationality">Nationality</label>
                <select
                  id="nationality"
                  value={selectedNationality}
                  onChange={(e) => setSelectedNationality(e.target.value)}
                  className={style.select}
                >
                  <option
                    style={{
                      color: "#969696",
                    }}
                    value=""
                    disabled
                  >
                    Select one
                  </option>
                  {nationalities.map((nationality, index) => (
                    <option key={index} value={nationality}>
                      {nationality}
                    </option>
                  ))}
                </select>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
              <div className={style.line}>
                <label>Date Of Birth</label>
                <div className={style.dateInput}>
                  <div className={style.line}>
                    <input
                      type="text"
                      placeholder="Day"
                      value={day}
                      readOnly
                      onClick={() => setShowDayDropdown(!showDayDropdown)}
                    />
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    {showDayDropdown && (
                      <div className={style.dropdown} ref={dayDropdownRef}>
                        {days.map((d) => (
                          <div
                            key={d}
                            onClick={() => {
                              setShowDayDropdown(!showDayDropdown);
                              setDay(d);
                            }}
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={style.line}>
                    <input
                      type="text"
                      placeholder="Month"
                      value={month}
                      readOnly
                      onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                    />
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    {showMonthDropdown && (
                      <div
                        className={`${style.dropdown} ${style.dropMonth}`}
                        ref={monthDropdownRef}
                      >
                        {months.map((m, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setShowMonthDropdown(!showMonthDropdown);
                              setMonth(m);
                            }}
                          >
                            {m}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={style.line}>
                    <input
                      type="text"
                      placeholder="Year"
                      value={year}
                      readOnly
                      onClick={() => setShowYearDropdown(!showYearDropdown)}
                    />
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    {showYearDropdown && (
                      <div className={style.dropdown} ref={yearDropdownRef}>
                        {years.map((y) => (
                          <div
                            key={y}
                            onClick={() => {
                              setShowYearDropdown(!showYearDropdown);
                              setYear(y);
                            }}
                          >
                            {y}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={style.line}>
                <label htmlFor="">Mobile Number</label>
                <input type="number" />
              </div>
              <div className={style.line}>
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
            </div>
            <div className={style.leftform}>
              <div className={style.line}>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="E.g Deo" />
              </div>
              <div className={style.line}>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="E.g JohnDeo@gmail.com" />
              </div>
              <div className={style.line}>
                <label htmlFor="">Gender</label>

                <div className={style.gender}>
                  <p>
                    <input type="radio" name="gender" id="" defaultChecked />
                    <label htmlFor="">Male</label>
                  </p>
                  <p>
                    <input type="radio" name="gender" id="" />
                    <label htmlFor="">Female</label>
                  </p>
                </div>
              </div>
              <div className={style.line}>
                <label htmlFor="">OTP</label>
                <input type="text" />
              </div>
              <div className={style.line}>
                <label htmlFor="">Confirm Password</label>
                <input type="password" />
              </div>
            </div>
          </form>
          <div className={style.info}>
            <div className={style.ques}>
              <p>Have an account?</p>
              <Link href={""}>Login</Link>
            </div>
            <button>Complete Signup</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
