import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Autocomplete, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Assignment = () => {
  const [fee, setFee] = React.useState("");
  const [nationalityArr, setNationalityArr] = React.useState([]);
  const [courseArr, setCourseArr] = React.useState([]);
  const [levelArr, setLevelArr] = React.useState([]);
  const [amount, setAmount] = React.useState(0);

  const handleChange = (event) => {
    setFee(event.target.value);
  };

  const [value, setValue] = React.useState(nationalityArr[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [courseVal, setCourseVal] = React.useState(courseArr[0]);
  const [inputCourseValue, setInputCourseValue] = React.useState("");

  const [levelVal, setLevelVal] = React.useState(levelArr[0]);
  const [inputLevelValue, setInputLevelValue] = React.useState("");

  useEffect(() => {
    if (
      fee.length &&
      inputValue.length &&
      inputLevelValue.length &&
      inputCourseValue.length
    ) {
      if (
        fee === "Exam Fee" &&
        inputValue === "INDIAN" &&
        inputLevelValue.length &&
        inputCourseValue.length
      ) {
        setAmount(400);
      }
      if (
        fee === "Exam Fee" &&
        inputValue === "FOREIGN" &&
        inputLevelValue.length &&
        inputCourseValue.length
      ) {
        setAmount(100);
      }
      if (
        fee === "Exam Fee" &&
        (inputValue === "NRI" || inputValue === "SAARC") &&
        inputLevelValue.length &&
        inputCourseValue.length
      ) {
        setAmount(600);
      }
      if (
        fee === "Application Fee" &&
        inputValue === "INDIAN" &&
        inputLevelValue === "UG" &&
        inputCourseValue.length
      ) {
        setAmount(200);
      }
      if (
        fee === "Application Fee" &&
        inputValue === "INDIAN" &&
        inputLevelValue === "UG-DIPLOMA" &&
        inputCourseValue.length
      ) {
        setAmount(300);
      }
      if (
        fee === "Application Fee" &&
        inputValue === "INDIAN" &&
        inputLevelValue === "PG" &&
        inputCourseValue.length
      ) {
        setAmount(500);
      }
      if (
        fee === "Application Fee" &&
        inputValue === "FOREIGN" &&
        (inputLevelValue === "UG" || inputLevelValue === "UG-DIPLOMA") &&
        inputCourseValue.length
      ) {
        setAmount(400);
      }
      if (
        fee === "Application Fee" &&
        inputValue === "FOREIGN" &&
        inputLevelValue === "PG" &&
        inputCourseValue.length
      ) {
        setAmount(700);
      }
    } else {
      setAmount(0);
    }
  }, [fee, inputCourseValue.length, inputLevelValue, inputValue]);

  useEffect(() => {
    const examFeeArr = ["INDIAN", "FOREIGN", "NRI", "SAARC"];
    const appFeeArr = ["INDIAN", "FOREIGN"];
    if (fee === "Exam Fee") {
      setNationalityArr(examFeeArr);
    } else {
      setNationalityArr(appFeeArr);
    }
  }, [fee]);

  useEffect(() => {
    const level1 = ["UG", "PG", "DIPLOMA", "Ph.D"];
    const level2 = ["UG", "UG-DIPLOMA", "PG"];

    if (nationalityArr.length === 2) {
      setLevelArr(level2);
    } else {
      setLevelArr(level1);
    }
  }, [nationalityArr]);

  useEffect(() => {
    const course = ["MEDICAL", "DENTAL", "AYURVEDA"];
    if (nationalityArr.length) setCourseArr(course);
  }, [nationalityArr]);

  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ width: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Fee</InputLabel>
          <Select value={fee} label="Select Fee" onChange={handleChange}>
            <MenuItem value={"Exam Fee"}>Exam Fee</MenuItem>
            <MenuItem value={"Application Fee"}>Application Fee</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box style={{ marginLeft: 10 }}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          disabled={!fee.length}
          id="controllable-states-demo"
          options={nationalityArr}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              autocomplete="off"
              {...params}
              label="Select Nationality"
            />
          )}
        />
      </Box>
      <Box style={{ marginLeft: 10 }}>
        <Autocomplete
          value={courseVal}
          onChange={(event, newValue) => {
            setCourseVal(newValue);
          }}
          inputValue={inputCourseValue}
          onInputChange={(event, newInputValue) => {
            setInputCourseValue(newInputValue);
          }}
          disabled={!inputValue.length}
          id="controllable-states-demo"
          options={courseArr}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField autocomplete="off" {...params} label="Select Course" />
          )}
        />
      </Box>
      <Box style={{ marginLeft: 10 }}>
        <Autocomplete
          value={levelVal}
          onChange={(event, newValue) => {
            setLevelVal(newValue);
          }}
          inputValue={inputLevelValue}
          onInputChange={(event, newInputValue) => {
            setInputLevelValue(newInputValue);
          }}
          disabled={!inputCourseValue.length}
          id="controllable-states-demo"
          options={levelArr}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField autocomplete="off" {...params} label="Select Level" />
          )}
        />
      </Box>
      <Box style={{ width: 100, marginLeft: 100, marginTop: "8px" }}>
        <Button color="primary" variant="contained">
          {amount}
        </Button>
      </Box>
    </div>
  );
};

export default Assignment;
