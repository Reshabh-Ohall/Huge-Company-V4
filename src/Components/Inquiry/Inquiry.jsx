import { useState } from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Sheet,
  Typography
} from "@mui/joy";

import CLogo from "../Navigation/logo.avif";
import "./Inquiry.css";

const inquiryEndpoint = "https://formspree.io/f/xykqykgo";

const referredOptions = [
  "Company Employee",
  "External Partner",
  "Other"
];

const initialForm = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  inquiringFor: "",
  referredBy: "",
  referralDetails: ""
};

export default function InquiryC() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value
    }));
  };

  const handleReferredChange = (_event, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      referredBy: value || ""
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await axios.post(inquiryEndpoint, form, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });

      setIsSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      console.error(error);

      setSubmitError(
        "We could not submit your inquiry right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="inquiry-page">
      <div className="inquiry-brand">
        <img
          src={CLogo}
          alt="Huge company logo"
          className="inquiry-logo"
        />

        <div className="inquiry-brand-copy">
          <strong className="inquiry-brand-name BC-DBlue">
            Huge
          </strong>

          <span className="inquiry-brand-tagline BC-DBlue">
            Auto Systems for Documents
          </span>
        </div>
      </div>

      <div className="inquiry-shell">
        <Sheet
          className="inquiry-panel"
          variant="plain"
        >
          {isSubmitted ? (
            <div className="inquiry-thank-you">
              <Typography
                level="h1"
                className="inquiry-title BC-DBlue"
              >
                Thank You
              </Typography>

              <Typography
                level="body-md"
                className="inquiry-copy"
              >
                Your inquiry has been submitted. Our team will get back to you
                soon.
              </Typography>
            </div>
          ) : (
            <>
              <Typography
                level="h1"
                className="inquiry-title BC-DBlue"
              >
                Contact Us
              </Typography>

              <Typography
                level="body-md"
                className="inquiry-copy"
              >
                Share your details and we will route your request to the right
                team.
              </Typography>

              <form
                onSubmit={handleSubmit}
                className="inquiry-form"
              >
                <div className="inquiry-field-row">
                  <FormControl required>
                    <FormLabel className="BC-DBlue">
                      First Name
                    </FormLabel>

                    <Input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      autoComplete="given-name"
                    />
                  </FormControl>

                  <FormControl required>
                    <FormLabel className="BC-DBlue">
                      Last Name
                    </FormLabel>

                    <Input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      autoComplete="family-name"
                    />
                  </FormControl>
                </div>

                <FormControl required>
                  <FormLabel className="BC-DBlue">
                    Phone Number
                  </FormLabel>

                  <Input
                    name="phoneNumber"
                    type="tel"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone number"
                    autoComplete="tel"
                  />
                </FormControl>

                <FormControl required>
                  <FormLabel className="BC-DBlue">
                    Email
                  </FormLabel>

                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    autoComplete="email"
                  />
                </FormControl>

                <FormControl required>
                  <FormLabel className="BC-DBlue">
                    Inquiring For
                  </FormLabel>

                  <Input
                    name="inquiringFor"
                    value={form.inquiringFor}
                    onChange={handleChange}
                    placeholder="What are you inquiring about?"
                  />
                </FormControl>

                <div className="inquiry-field-row">
                  <FormControl required>
                    <FormLabel className="BC-DBlue">
                      Referred By
                    </FormLabel>

                    <Select
                      value={form.referredBy || null}
                      onChange={handleReferredChange}
                      placeholder="Select source"
                    >
                      {referredOptions.map((option) => (
                        <Option
                          key={option}
                          value={option}
                        >
                          {option}
                        </Option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl required>
                    <FormLabel className="BC-DBlue">
                      Referral Details
                    </FormLabel>

                    <Input
                      name="referralDetails"
                      value={form.referralDetails}
                      onChange={handleChange}
                      placeholder="Name or reference"
                    />
                  </FormControl>
                </div>

                {submitError && (
                  <Typography
                    level="body-sm"
                    className="inquiry-error"
                  >
                    {submitError}
                  </Typography>
                )}

                <Button
                  className="BC-DBlue"
                  type="submit"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  sx={{
                    mt: 1,
                    color: "#ffffff",
                    backgroundColor: "#1b4e9b",
                    "&:hover": {
                      backgroundColor: "#143f80"
                    }
                  }}
                >
                  Submit
                </Button>
              </form>
            </>
          )}
        </Sheet>
      </div>
    </main>
  );
}
