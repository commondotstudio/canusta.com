import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

interface EnquireFormProps {
  onRequestClose: any;
  isOpen: boolean;
}

function EnquireForm({ onRequestClose, isOpen }: EnquireFormProps) {
  Modal.setAppElement("#__next");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [state, setState] = useState({
    isSubmitted: false,
    isError: false,
  });

  const onSubmit = (data: any) => {
    const formData = new FormData();

    // Hidden field key/values.
    formData.append("u", "1");
    formData.append("f", "1");
    formData.append("s", "");
    formData.append("c", "0");
    formData.append("m", "0");
    formData.append("act", "sub");
    formData.append("v", "2");
    formData.append("or", "e7ce0ab3148eca1854b8586788b8c71c");

    // Form field key/values.
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("field[2]", data.companyName);
    formData.append("field[4]", data.sector);
    formData.append("field[6]", data.information);
    formData.append("field[5]", data.investmentStage);

    // Pass FormData values into a POST request to ActiveCampaign.
    // Mark form submission successful, otherwise return error state.
    fetch("https://tascemalpay.activehosted.com/proc.php", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => {
        setState({
          isSubmitted: true,
          isError: false,
        });
      })
      .catch((err) => {
        setState({
          isSubmitted: false,
          isError: true,
        });
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div
        id="form-wrapper"
        className="grid-row fixed left-0 top-0 z-50 grid h-screen w-[100vw] grid-cols-12 overflow-y-scroll bg-blue px-sm sm:px-md"
      >
        <div
          className="closeButton hover:text-white-0 col-end-13 cursor-pointer px-sm pb-[85px] pt-[45px] transition-all duration-300 sm:px-md "
          onClick={() => onRequestClose()}
        >
          <div className="line h-[1px] w-[20px] rotate-45 bg-white"></div>
          <div className="line h-[1px] w-[20px] -rotate-45 bg-white"></div>
        </div>
        <div
          id="form-text"
          className="col-start-1 col-end-13 mb-[60px] w-full font-light md:col-start-1 md:col-end-4 md:mb-0"
        >
          <h2 className="text-[64px] font-light leading-[63px] ">
            Get <i>Started</i>
          </h2>
          <p className="mb-10 mt-16 w-full">
            Our technology and expertise enables us to back exceptional founders
            whilst also delivering superior returns for investors. Whether
            you’re a founder or investor, contact us to discuss your growth
            plans.
          </p>
          <p className="">You can also contact us by email.</p>
          <p className="">
            Founders:{" "}
            <a href="mailto:pitch@fomcap.com" className="underline">
              pitch@fomcap.com
            </a>{" "}
          </p>
          <p className="mb-[30px]">
            Investors:{" "}
            <a href="mailto:pitch@fomcap.com" className="underline">
              investor@fomcap.com
            </a>
          </p>
        </div>
        {!state.isSubmitted ? (
          <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-13">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <div>
                  <div>
                    <div className="align-center align-center mb-[30px] flex ">
                      <input
                        id="field_1Founder"
                        type="radio"
                        value="Founder"
                        {...register("type")}
                      />
                      <label htmlFor="field[1]" className="mr-[30px] pl-[10px]">
                        Founder
                      </label>
                      <input
                        id="field_1Investor"
                        type="radio"
                        value="Investor"
                        {...register("type")}
                      />
                      <label htmlFor="field_1Founder" className="pl-[10px]">
                        Investor
                      </label>
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    <div className="flex flex-col">
                      <label htmlFor="fullname">Name</label>
                      <input
                        id="fullname"
                        // name="fullname"
                        placeholder=""
                        className={
                          errors.fullname
                            ? "c-form__textbox error"
                            : "c-form__textbox flex w-full"
                        }
                        {...register("fullname", { required: true })}
                      />
                      {errors.fullname && (
                        <div className="validation--error">
                          <p>Please enter your name</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        // name="email"
                        placeholder=""
                        className={
                          errors.email
                            ? "c-form__textbox error"
                            : "c-form__textbox"
                        }
                        {...register("email", {
                          required: true,
                          pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Please enter a valid email",
                          },
                        })}
                      />
                      {errors.email && (
                        <div className="validation--error">
                          <p>Please enter a valid email</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    <div className="flex flex-col">
                      <label htmlFor="field[2]">Company Name</label>
                      <input
                        id="field[2]"
                        // name="companyName"
                        placeholder=""
                        className={
                          errors.companyName
                            ? "c-form__textbox"
                            : "c-form__textbox"
                        }
                        {...register("companyName")}
                      />
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    <div className="flex flex-col">
                      <label htmlFor="field[4]">Sector</label>
                      <input
                        id="field[4]"
                        // name="sector"
                        placeholder=""
                        className={
                          errors.sector ? "c-form__textbox" : "c-form__textbox"
                        }
                        {...register("sector")}
                      />
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    <div className="flex flex-col">
                      <label className="mb-[30px] " htmlFor="field[5]">
                        What investment stage is your company at?
                      </label>
                      <div className="grid">
                        <div className="flex flex-row">
                          <input
                            id="field_5Start-up"
                            type="radio"
                            // name="investmentStage"
                            value="Start-up"
                            {...register("investmentStage")}
                          />
                          <label htmlFor="field_5Seed" className="pl-[10px]">
                            Start-up
                          </label>
                        </div>
                        <div className="flex flex-row">
                          <input
                            id="field_5Seed"
                            type="radio"
                            // name="investmentStage"
                            value="Seed"
                            {...register("investmentStage")}
                          />
                          <label htmlFor="field_5Seed" className="pl-[10px]">
                            Seed
                          </label>
                        </div>
                        <div className="flex flex-row">
                          <input
                            id="field_5Series A"
                            type="radio"
                            // name="investmentStage"
                            value="Series A"
                            {...register("investmentStage")}
                          />
                          <label
                            htmlFor="field_5Series A"
                            className="pl-[10px]"
                          >
                            Series A
                          </label>
                        </div>
                        <div className="flex flex-row">
                          <input
                            id="field_5Series B"
                            type="radio"
                            // name="investmentStage"
                            value="Series B"
                            {...register("investmentStage")}
                          />
                          <label
                            htmlFor="field_5Series B"
                            className="pl-[10px]"
                          >
                            Series B
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    <div className="flex flex-col">
                      <label htmlFor="field[6]" className="mb-[30px]">
                        Information
                      </label>
                      <textarea
                        id="field[6]"
                        // name="information"
                        placeholder=""
                        style={{ height: "121px" }}
                        className={
                          errors.information
                            ? "c-form__textarea error"
                            : "c-form__textarea"
                        }
                        {...register("information", { required: true })}
                      ></textarea>
                      {errors.information && (
                        <div className="validation--error">
                          <p>Please enter your information</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    {/* upload pdf */}
                    <div className="flex flex-col">
                      <label htmlFor="field[7]" className="mb-[30px]">
                        Pitch Deck
                      </label>
                      <input
                        id="field[7]"
                        // name="pitchDeck"
                        type="file"
                        accept=".pdf"
                        {...register("pitchDeck")}
                      />
                    </div>
                  </div>
                  <div className="mb-[30px] ">
                    <input
                      type="submit"
                      value="Submit"
                      className="align-center flex w-full justify-center rounded-lg bg-white p-[10px] text-center font-bold text-[#834FF2]"
                    />
                  </div>
                </div>
              </fieldset>
              {state.isError ? (
                <p>
                  Unfortunately, your submission could not be sent. Please try
                  again later.
                </p>
              ) : null}
            </form>
          </div>
        ) : (
          <p className="col-start-6 col-end-13">
            Thank you for your message. We will be in touch shortly.
          </p>
        )}
      </div>
    </Modal>
  );
}
export default EnquireForm;
