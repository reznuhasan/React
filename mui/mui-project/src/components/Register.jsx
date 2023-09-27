import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        age: "",
        terms: false,
        gender: "female"
    })
    const handleChanged = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField variant='outlined' name='username' value={inputs.username} type='text' onChange={handleChanged} sx={{ margin: "30px" }}>
                </TextField><br />
                <TextField variant='outlined' name='email' value={inputs.email} type='email' onChange={handleChanged} sx={{ margin: "30px" }}>
                </TextField><br />
                <TextField variant='outlined' name='password' value={inputs.password} type='password' onChange={handleChanged} sx={{ margin: "30px" }}>
                </TextField><br />
                <FormControl fullWidth>
                    <InputLabel id="menu">Age</InputLabel>
                    <Select labelId="menu"
                        id="menu-list" name="age" onChange={handleChanged} value={inputs.age}
                        label="age">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormGroup>
                    <FormControlLabel label="are you agree" control={<Checkbox onChange={(e) => setInputs(prevState => ({
                        ...prevState,
                        terms: !inputs.terms
                    }))} />}></FormControlLabel>
                </FormGroup>
                <FormControl>
                    <FormLabel id="gender"> Gender </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="gender"
                        value={inputs.gender}
                        onChange={handleChanged}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>

                </FormControl>
                <br />
                <Button type="submit" variant="text">Submit</Button>
            </form>
        </div>
    )
}

export default Register