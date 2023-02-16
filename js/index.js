import { selector, inputFetch, windowOnLoad } from "./modules/staticFunctions.js";
import { LeftCurrency, LeftInput, RightCurrency, RightInput, setleftCurrent, setrightCurrent, } from "./modules/variables.js";

LeftCurrency.forEach(item => {
    item.addEventListener("click", (e) => {
        selector(LeftCurrency, e);
        setleftCurrent(e.target.innerText);
        inputFetch(LeftInput, RightInput, "right");
    });
});

RightCurrency.forEach(item => {
    item.addEventListener("click", (e) => {
        selector(RightCurrency, e);
        setrightCurrent(e.target.innerText);
        inputFetch(RightInput, LeftInput, "left");
    });
});

LeftInput.addEventListener("keyup", () => inputFetch(RightInput, LeftInput, "left"));
RightInput.addEventListener("keyup", () => inputFetch(LeftInput, RightInput, "right"));

  <Container component="main" maxWidth="xs" >
            <form method='POST' className='form' onChange={(e) => setconfirmCode(e.target.value)} >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        gap: "10px",
                        width: "100%",
                        height: "90vh",
                        padding: "30px",
                        boxSizing: "content-box",
                        borderRadius: "15px"
                    }}
                >
                    <Typography component="h1" variant="h5" textAlign={"center"} color="primary">
                        Confirmation
                    </Typography>
                
                    <TextField
                        autoFocus
                        margin="normal"
                        autoComplete='password'
                        label="Confirm code"
                        variant="outlined"
                        fullWidth
                        
                        // {...register("password")}
                        // error={!!errors?.password}
                        // helperText={errors?.password ? errors.password.message : null}
                        // onChange={passwordHandler}

                    />
                  
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, p: 2 }}
                        onClick={confirm}
                    >Submit</Button>
                </Box>
            </form>
        </Container>
