'use client'
import * as React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import PublicGoogleSheetsParser from 'public-google-sheets-parser'

const TrackerPage: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const options = { sheetName: '2025 Summer Analyst', useFormat: true }
            const parser = new PublicGoogleSheetsParser('1Zk13bgREvD2Fev2XKJasyyx-BV2SYimA', options)
            parser.parse().then(response => {
                'Legend: AS = Application Submission, WQ = Written Questions, CL = Cover Letter, OT = Online Tests, JS = Job Simulation, HV = HireVue, TI = Telephone Interview, VI = Video Interview, F2F = Face to Face, AC = Assessment Centre, TBC = To Be Confirmed Firm Name'
                const filteredResponse = response.map(item => {
                    const jsonObject = JSON.parse(JSON.stringify(item));
                    const companyName = jsonObject['Legend: AS = Application Submission, WQ = Written Questions, CL = Cover Letter, OT = Online Tests, JS = Job Simulation, HV = HireVue, TI = Telephone Interview, VI = Video Interview, F2F = Face to Face, AC = Assessment Centre, TBC = To Be Confirmed Firm Name'];
                    const process = jsonObject["To add further information or changes, please use the 'Add Comment' at the top of your screen or right-clicking on the relevant cell. Please contact LSESU BIG via email (Business-investment@lsesu.org) or Instagram (@lsesubig) for any enquiries. Application Process (After Application Submission)"]
                    delete jsonObject['Legend: AS = Application Submission, WQ = Written Questions, CL = Cover Letter, OT = Online Tests, JS = Job Simulation, HV = HireVue, TI = Telephone Interview, VI = Video Interview, F2F = Face to Face, AC = Assessment Centre, TBC = To Be Confirmed Firm Name'];
                    delete jsonObject["To add further information or changes, please use the 'Add Comment' at the top of your screen or right-clicking on the relevant cell. Please contact LSESU BIG via email (Business-investment@lsesu.org) or Instagram (@lsesubig) for any enquiries. Application Process (After Application Submission)"]
                    jsonObject['Process'] = process
                    return { 'Company Name': companyName, ...jsonObject };
                });
                const keys = Object.keys(filteredResponse[1]);
                filteredResponse.forEach(item => {
                    keys.forEach(key => {
                        if (!!!item[key]) {
                            item[key] = '-';
                        }
                    });
                });
                setData(filteredResponse);
                console.log(filteredResponse[0])

                setLoading(false);
            })
        };

        fetchData();
    }, []);

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom className='text-center my-10'>
                    BIG Tracker
                </Typography>
                <div className='flex my-5 w-full justify-evenly'>
                    <button className='px-4 py-2 rounded-md border hover:bg-BIGBlue hover:text-white'>2025 Summer Analyst</button>
                    <button className='px-4 py-2 rounded-md border hover:bg-BIGBlue hover:text-white'>2025 Spring Intern</button>
                    <button className='px-4 py-2 rounded-md border hover:bg-BIGBlue hover:text-white'>BIG Opportunities</button>
                </div>
                {loading ? (
                    <Typography>Loading...</Typography>
                ) : (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {data.length > 0 && Object.keys(data[1]).map((header, index) => (
                                        <TableCell key={index}>{header}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        {Object.entries(row).filter(([key]) => key !== 'legend').map(([key, cell], cellIndex) => (
                                            <TableCell key={cellIndex}>{cell}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Container>
    );
};

export default TrackerPage;
