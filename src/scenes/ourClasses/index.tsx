import { SelectedPage, ClassType } from "@/common/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Heading from "@/common/Heading";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Push yourself to the limit with our intense weight training classes, designed to help you build muscle and strength. Our expert trainers will guide you through a range of exercises and techniques to help you achieve your fitness goals.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Take a break from the hustle and bustle of daily life and join us for a relaxing yoga class. Our experienced instructors will guide you through a series of poses and breathing exercises to help you unwind and improve your flexibility and balance.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core and sculpt your abs with our challenging ab core classes. Our workouts are designed to target your midsection and help you achieve a lean, toned physique.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Get outside of your comfort zone and try something new with our adventurous fitness classes. From rock climbing to obstacle courses, we offer a range of exciting activities to keep you motivated and engaged.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Take your fitness to the next level with our advanced training classes. Led by our expert trainers, these workouts are designed to challenge your body and help you achieve your maximum potential.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Heading>OUR CLASSES</Heading>
            <p className="py-5">
              <span className="text-secondary-500 text-bold text-lg">EVOGYM</span> offers a wide variety of classes to suit every fitness
              level and interest. From high-intensity interval training (HIIT)
              to yoga, cycling, dance, and more, our classes are designed to
              challenge and inspire you while keeping you engaged and motivated
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
