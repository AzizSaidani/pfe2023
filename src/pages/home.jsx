import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Full Service House Cleaning.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We take the pain out of finding a trustworthy house cleaner that
                not only brings your ohme back to file, but provides the tender
                loving care to your home.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-32 flex flex-wrap items-center">
            <div
              className="mx-auto -mt-8 w-full px-4 md:w-5/12"
              style={{ marginTop: "80px" }}
            >
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Full Service House Cleaning.
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                We take the pain out of finding a trustworthy house cleaner that
                not only brings your ohme back to file, but provides the tender
                loving care to your home.
              </Typography>
            </div>
            <div
              className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0"
              style={{ marginTop: "80px" }}
            >
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="Why Us?"></PageTitle>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>

          <div className="container mx-auto">
            <PageTitle heading="Our Services"></PageTitle>
            <div className="mt-24 grid grid-cols-1  gap-x-40 md:grid-cols-2 xl:grid-cols-3">
              {teamData.map(({ img, name, position }) => (
                <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                />
              ))}
            </div>
          </div>
          <br></br>
          <br></br>
          <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div className="container mx-auto">
              <div className="mt-32 flex flex-wrap items-center">
                <div
                  className="mx-auto -mt-8 w-full px-4"
                  style={{ marginTop: "80px" }}
                >
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Interested in becoming part of our team?
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                    Our platform allows for a flexible schedule with generous
                    pay. Becoming a maid is a simple process that provides the
                    luxuries of working when and where you want.
                  </Typography>
                  <Button
                    variant="gradient"
                    size="md"
                    className="mt-8"
                    style={{
                      display: "block",
                      margin: "auto",
                      fontSize: "16px",
                      paddingLeft: "35px",
                      paddingRight: "35px",
                    }}
                  >
                    Sign Up{" "}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <PageTitle heading="Contact Us"></PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
