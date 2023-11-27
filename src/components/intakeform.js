

import React, { useState } from "react";
import {
    TextField,
    Typography,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Container,
    Button,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function BasicInfo() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [occupation, setOccupation] = useState("");
    const [email, setEmail] = useState("");
    const [annualincome, setAnnualIncome] = useState("");
    const [numbankaccounts, setBankAccounts] = useState("");
    const [numcreditcards, setCreditCards] = useState("");
    const [numloans, setLoans] = useState("");
    const [intrate, setInterestRate] = useState("");
    const [emi, setEMI] = useState("");
    const [outstandingdebt, setOutstandingDebt] = useState("");
    const [monthlybal, setMonthlyBal] = useState("");

    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Send data from the form to the server
        axios.post("http://localhost:5000/submit-form", {
            firstname,
            lastname,
            age,
            occupation,
            email,
            annualincome,
            numbankaccounts,
            numcreditcards,
            numloans,
            intrate,
            emi,
            outstandingdebt,
            monthlybal,
        })
            .then((response) => {
                console.log(response.data);
                navigate("/prediction")
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Container maxWidth="md" style={{ marginTop: "50px" }}>
            <Card raised>
                <CardHeader
                    title="Basic Information"
                    titleTypographyProps={{ variant: "h5", align: "center" }}
                />
                <CardContent>
                    <form onSubmit={handleFormSubmit}>
                        <Grid container spacing={2}>
                            {/* First Form Fields */}
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstname}
                                    label="First Name"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastname}
                                    label="Last Name"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setAge(e.target.value)}
                                    value={age}
                                    label="Age"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setOccupation(e.target.value)}
                                    value={occupation}
                                    label="Occupation"
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    label="Email Address"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ marginTop: '20px' }}>
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Financial Information
                                    </Typography>
                                </div>
                            </Grid>
                            {/* Second Form Fields */}
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setAnnualIncome(e.target.value)}
                                    value={annualincome}
                                    label="Annual Income"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setBankAccounts(e.target.value)}
                                    value={numbankaccounts}
                                    label="Number of Bank Accounts"
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setCreditCards(e.target.value)}
                                    value={numcreditcards}
                                    label="Number of Credit Cards"
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setLoans(e.target.value)}
                                    value={numloans}
                                    label="Number of Loans"
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ marginTop: '20px' }}>
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Loan Information
                                    </Typography>
                                </div>
                            </Grid>
                            {/* Third Form Fields */}
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    value={intrate}
                                    label="Interest Rate on Credit Card"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setEMI(e.target.value)}
                                    value={emi}
                                    label="Monthly Debt Payment"
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setOutstandingDebt(e.target.value)}
                                    value={outstandingdebt}
                                    label="Total Outstanding Debt"
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setMonthlyBal(e.target.value)}
                                    value={monthlybal}
                                    label="Monthly Loan Balance"
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>

                            {/* Submit Button */}
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    style={{ backgroundColor: "#FFA96A", color: "black" }}
                                    fullWidth
                                >
                                    SUBMIT
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}
