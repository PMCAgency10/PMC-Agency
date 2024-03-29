import { motion } from "framer-motion";
import AutoHeight from "react-auto-height";
import { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { TextField } from "@mui/material";

export default function AnimatedForm({
  setIsFormOpen,
  setDisplayThankYouPage,
}) {
  const [section, setSection] = useState(0);
  const [isBack, setIsBack] = useState(false);

  const changeSection = (i, isBack) => {
    isBack ? setIsBack(true) : setIsBack(false);
    setSection(i);
  };
  const [userInfo, setUserInfo] = useState({});

  const handleSendEmail = () => {
    const { firstName, lastName, businessName, phoneNumber, email } = userInfo;
    var subject =
      "New Inquiry from " + firstName + " " + lastName + " - " + businessName;

    var body =
      "Dear " +
      firstName +
      " " +
      lastName +
      ",\n\n" +
      "Thank you for reaching out to us regarding your business, " +
      businessName +
      ". We appreciate your inquiry.\n\n" +
      "Here are the details you provided:\n" +
      "Phone: " +
      phoneNumber +
      "\n" +
      "Email: " +
      email +
      "\n\n" +
      "We will get back to you as soon as possible.\n\n" +
      "Best regards,\nYour Marketing Agency";

    var mailtoLink =
      "mailto:info@pledgemc.com?" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  };

  const handleOnChange = ({ target: { value, name } }) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const notAllowedByField = (field) =>
    !userInfo?.[field] || userInfo?.[field] === "";

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css"
      />
      <div
        className="w-full h-screen flex flex-col bg-orange-100 gap-4 space-y-5 sm:space-y-0 items-center justify-center"
        style={{ backgroundColor: "white", border: "none" }}
      >
        <div
          className="w-full max-w-md flex items-center justify-around space-x-3"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`${
                (section < i && "bg-gray-100 dark:bg-gray-900  h-2 ") ||
                (section > i && "bg-green-500 dark:bg-green-500  h-2") ||
                "p-0 bg-green-100 dark:bg-green-900"
              }  w-full rounded flex items-center justify-center transition-bg duration-300 ease-in-out`}
            >
              {section === i && (
                <motion.div
                  className="w-full h-2 rounded flex items-center justify-center bg-green-100 dark:bg-green-900"
                  layoutId="bg"
                />
              )}
            </div>
          ))}
        </div>
        <AutoHeight className="relative inline-block h-full w-full max-w-md xl:max-w-xl overflow-hidden text-center align-middle  transition-all">
          {section !== 0 && (
            <button
              onClick={() => changeSection(section - 1, true)}
              className="absolute z-10 left-10 top-5 inline-flex items-center justify-center gap-2 hover:underline"
            >
              <HiOutlineArrowLeft /> Back
            </button>
          )}

          {section === 0 && (
            <motion.div
              style={isBack ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
              animate={
                isBack
                  ? { translateX: 200, opacity: 1 }
                  : { translateX: -200, opacity: 1 }
              }
              className="my-16"
            >
              <div className="h-40">
                <TextField
                  label={"First name"}
                  style={{ width: "80%" }}
                  name="firstName"
                  onChange={handleOnChange}
                  required
                  value={userInfo?.firstName || ""}
                  focused={userInfo?.firstName}
                />
              </div>
              <button
                onClick={() => changeSection(1, false)}
                className="w-32 h-10 bg-black text-white rounded-lg text-xl"
                disabled={!userInfo?.firstName || userInfo?.firstName === ""}
                style={{
                  cursor: notAllowedByField("firstName") && "not-allowed",
                }}
              >
                Continue
              </button>
            </motion.div>
          )}

          {section === 1 && (
            <motion.div
              style={isBack ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
              animate={
                isBack
                  ? { translateX: 200, opacity: 1 }
                  : { translateX: -200, opacity: 1 }
              }
              className="my-16"
            >
              <div className="h-40">
                <TextField
                  label={"Last name"}
                  style={{ width: "80%" }}
                  name="lastName"
                  onChange={handleOnChange}
                  required
                  value={userInfo?.lastName || ""}
                  focused={userInfo?.lastName}
                />
              </div>
              <button
                onClick={() => changeSection(2, false)}
                className="w-32 h-10 bg-black text-white rounded-lg text-xl"
                disabled={!userInfo?.lastName || userInfo?.lastName === ""}
                style={{
                  cursor: notAllowedByField("lastName") && "not-allowed",
                }}
              >
                Continue
              </button>
            </motion.div>
          )}

          {section === 2 && (
            <motion.div
              style={isBack ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
              animate={
                isBack
                  ? { translateX: 200, opacity: 1 }
                  : { translateX: -200, opacity: 1 }
              }
              className="my-16"
            >
              <div className="h-40">
                <TextField
                  label={"Email"}
                  style={{ width: "80%" }}
                  name="email"
                  onChange={handleOnChange}
                  type="email"
                  required
                  value={userInfo?.email || ""}
                  focused={userInfo?.email}
                />
              </div>
              <button
                onClick={() => changeSection(3, false)}
                className="w-32 h-10 bg-black text-white rounded-lg text-xl"
                disabled={!userInfo?.email || userInfo?.email === ""}
                style={{
                  cursor: notAllowedByField("email") && "not-allowed",
                }}
              >
                Continue
              </button>
            </motion.div>
          )}

          {section === 3 && (
            <motion.div
              style={isBack ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
              animate={
                isBack
                  ? { translateX: 200, opacity: 1 }
                  : { translateX: -200, opacity: 1 }
              }
              className="my-16"
            >
              <div className="h-40">
                {" "}
                <TextField
                  label={"Phone number"}
                  style={{ width: "80%" }}
                  name="phoneNumber"
                  onChange={handleOnChange}
                  type="number"
                  required
                  value={userInfo?.phoneNumber || ""}
                  focused={userInfo?.phoneNumber}
                />
              </div>
              <button
                onClick={() => changeSection(4, false)}
                className="w-32 h-10 bg-black text-white rounded-lg text-xl"
                disabled={
                  !userInfo?.phoneNumber || userInfo?.phoneNumber === ""
                }
                style={{
                  cursor: notAllowedByField("phoneNumber") && "not-allowed",
                }}
              >
                Continue
              </button>
            </motion.div>
          )}

          {section === 4 && (
            <motion.div
              style={isBack ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
              animate={
                isBack
                  ? { translateX: 200, opacity: 1 }
                  : { translateX: -200, opacity: 1 }
              }
              className="my-16"
            >
              <div className="h-40">
                {" "}
                <TextField
                  label={"Business name"}
                  style={{ width: "80%" }}
                  name="businessName"
                  onChange={handleOnChange}
                  required
                  value={userInfo?.businessName || ""}
                  focused={userInfo?.businessName}
                />
              </div>
              <button
                onClick={() => {
                  handleSendEmail();
                  setDisplayThankYouPage(true);
                  setIsFormOpen(false);
                }}
                className="w-32 h-10 bg-black text-white rounded-lg text-xl"
                disabled={
                  !userInfo?.businessName || userInfo?.businessName === ""
                }
                style={{
                  cursor: notAllowedByField("businessName") && "not-allowed",
                }}
              >
                Send email
              </button>
            </motion.div>
          )}
        </AutoHeight>
      </div>
    </>
  );
}
