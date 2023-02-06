import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';


export { MessageForm }

function MessageForm({ onAdd }) {
    const [value, setValue] = useState("");
    const addClickHendler = () => {
        if (!value) {
            return;
        }
        onAdd(value);
        setValue("");
    };

    return (

        <Box sx={{ top: 'auto', bottom: 70, mt: 5 }}
            display="flex"
            position="fixed"
        >

            <Avatar
                alt="Remy Sharp"
                src="https://vraki.net/sites/default/files/mood/29_9.jpg"
                sx={{ width: 80, height: 80 }}
            />


            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '64ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Box>
                    <TextField
                        color="secondary"
                        id="outlined-multiline-flexible"
                        label="I`m broadcasting:"
                        multiline
                        maxRows={1}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                addClickHendler();
                            }
                        }}
                    />
                </Box>
            </Box>

            <Button variant="contained"
                endIcon={<SendIcon />}
                color="secondary"
                onClick={addClickHendler}
                size="large"
                sx={{ width: 80, height: 80 }}
            >
                Send
            </Button>

        </Box>
    );
}
