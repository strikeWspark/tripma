import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import InputField from "./InputField";
 
export const DialogDefault = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button onClick={handleOpen} className="text-center text-black">Sign In</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="mx-auto"
      >
        <Card className=" w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            
            <div className='text-xl p-4'>
                <h1>Sign up for Tripma</h1> </div>
           
           
              <p className='p-4'>Tripma is totally free to use. Sign up using your email address or phone number below to get started.</p>
            
           <Typography>
           <div className="py-4 gap-4 ">
                <InputField
                    placeholder="Email" />


            </div>
            <div className="py-4 gap-4 ">
                <InputField
                    placeholder="Password" />


            </div>
            <div className="py-2 flex">
                <InputField type="checkbox" />
                <div className="px-4 text-md">I agree to the <span className='text-[605dec#]'>terms and condition</span></div>
            </div>
            <div className=" py-2 flex">
                <InputField type="checkbox" />
                <div className="px-4 text-md">Send me the latest deal alerts</div>
            </div>
            <div className=" px-4 text-center">
                <button className='bg-[#605dec] w-[250px] rounded-md shadow-xl font-light my-6  ml-1 mx-auto px-6 py-3 text-white '>Create Account</button>
            </div>
            <div class="flex items-center m-4 p-4">
                <div class="flex-1 h-px bg-[#d2d2e9]"></div>
                <div class="mx-4 text-lg">Or</div>
                <div class="flex-1 h-px bg-[#d2d2e9]"></div>
            </div>

            <div className=" px-4 text-center">
                <button className=' w-[250px] outline outline-1 outline-[#605dec] rounded-md font-light   px-6 py-3 text-[#605dec] '>Continue with Google</button>
            </div>
            <div className="py-2 px-4 text-center">
                <button className=' w-[250px] outline outline-1 outline-[#605dec] rounded-md font-light    px-6 py-3 text-[#605dec] '>Continue with Apple</button>
            </div>
            <div className="px-4 text-center">
                <button className=' w-[250px] outline outline-1 outline-[#605dec] rounded-md font-light    px-6 py-3 text-[#605dec] '>Continue with Facebook</button>
            </div>

           </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
