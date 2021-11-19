import React, { useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "../../Styles/DesktopStyles";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import Aos from "aos";
import "aos/dist/aos.css";
import MainAcm from "../../Resources/Images/Main.png";
import LocalACM from "../../Resources/Images/LocalACM.JPG";
import Principal from "../../Resources/Images/Principal.jpg";
import HOD from "../../Resources/Images/HOD.jpg";

function HomeDesktop() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={classes.rootContainer}>
        <div className={classes.container1}>
          <div className={classes.overlayContainer}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.mainTitle}
              data-aos="fade-down"
              data-aos-delay={500}
            >
              ACM GIT
            </Typography>
            <Typography
              variant="h2"
              color="initial"
              className={classes.subTitle}
              data-aos="fade-down"
              data-aos-delay={500}
            >
              Students Chapter
            </Typography>
          </div>
          <Paper
            elevation={12}
            className={classes.imgPaper}
            data-aos="fade-down"
            data-aos-delay={500}
          >
            <CustomCarousel
              imgStyle={classes.imageProp}
              imgDivStyle={classes.imgDiv}
            />
          </Paper>
        </div>
        <div className={classes.container2}>
          <Paper
            className={classes.imgwithContentPaper}
            elevation={6}
            data-aos="fade-left"
          >
            <img src={MainAcm} className={classes.imgwithContent} alt="GIT" />
          </Paper>
          <div className={classes.content1}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.contentSub}
              data-aos="fade-up"
            >
              about
            </Typography>
            <Typography
              variant="h2"
              color="initial"
              className={classes.contentMain}
              data-aos="fade-up"
            >
              ACM
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className={classes.contentTypo}
              data-aos="fade-up"
            >
              ACM, the Association for Computing Machinery is the world’s
              largest educational and scientific computing society, uniting
              educators, researchers and professionals to inspire dialogue,
              share resources and address the field’s challenges. ACM
              strengthens the computing profession’s collective voice through
              strong leadership, promotion of the highest standards, and
              recognition of technical excellence. ACM supports the professional
              growth of its members by providing opportunities for life-long
              learning, career development, and professional networking. With
              nearly 100,000 members from more than 190 countries, ACM works to
              advance computing as a science and a profession
            </Typography>
          </div>
        </div>
        <div className={classes.container2}>
          <div className={classes.content1}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.contentSub}
              data-aos="fade-up"
            >
              about
            </Typography>
            <Typography
              variant="h2"
              color="initial"
              className={classes.contentMain}
              data-aos="fade-up"
            >
              ACM KLS-GIT
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className={classes.contentTypo}
              data-aos="fade-up"
            >
              The ACM KLS GIT Student Chapter is an official student body
              Chartered on 29th August 2014. This Chapter aims at creating a
              techno motive environment for the students of the Information
              Science field apart from their regular course content. The chapter
              arranges various resourceful workshops, expert-talks,
              industry-oriented courses, hands-on workshops, industrial visits,
              quizzes and coding competitions. The association also conducting
              several extra and co-curricular activities to improve the overall
              personality of our students.
            </Typography>
          </div>
          <Paper className={classes.imgwithContentPaper} data-aos="fade-right">
            <img src={LocalACM} className={classes.imgwithContent} alt="GIT" />
          </Paper>
        </div>
        {/*  */}
        <div className={classes.container2}>
          <Paper
            elevation={2}
            style={{ borderRadius: 40 }}
            data-aos="fade-left"
          >
            <img src={Principal} className={classes.imgwithContent} alt="GIT" />
          </Paper>
          <div className={classes.content1}>
            <Typography
              variant="h3"
              color="initial"
              className={classes.contentMain}
              data-aos="fade-up"
            >
              Message From Principal
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className={classes.contentTypo}
              data-aos="fade-up"
            >
              <i>
                “Education is not a preparation for life; Education is life
                itself. It is a perpetual process of learning that makes an
                individual realise oneself. So do not just study, but learn. Do
                not just learn, but observe. Do not just observe, but act in
                cognizance.”
              </i>
              <br />
              We are often prone to different challenges at various intervals of
              time and the driving factor that keeps us going is “Passion”. As a
              seasoned pedagogue, I have been passionate about nurturing the
              student community to the fullest extent possible. I believe in my
              role as a facilitator, to bring out the best in every student and
              encourage them to achieve their goals. Our institution believes
              that the very purpose of education is to turn mirrors into
              windows; in the sense –to make provision for a multitude of
              opportunities for the student community, to explore and enhance
              their capabilities. Challenges, Competition and the fear of
              failure are natural, but success embraces those who face these
              with the can-do attitude. The holistic approach of the institute
              stimulates a paradigm shift towards ‘Global education’, innovation
              among students by inspiring fresh perceptiveness, creative
              thinking and firm conviction to achieve true success. ACM Student
              chapter at our institute has been involved in helping computing
              professionals to be their best and most creative. They create a
              bridge between the students and their peers, to what the latest
              developments, and inspire them to advance the profession and make
              a positive impact on society. The student chapter has been
              dedicated to see a world where computing helps solve tomorrow’s
              problems – where students use their knowledge and skills to
              advance the computing profession and make a positive social impact
              throughout the world.
            </Typography>
          </div>
        </div>
        <div className={classes.container2}>
          <div className={classes.content1}>
            <Typography
              variant="h3"
              color="initial"
              className={classes.contentMain}
              data-aos="fade-up"
            >
              Message From HOD ISE
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className={classes.contentTypo}
              data-aos="fade-up"
            >
              The Department of ISE is striving hard towards the goal of
              providing innovative and quality education with high standard to
              achieve academic excellence and provides platform for the students
              to achieve their career goals. Our Department has produced
              hundreds of professionals and has established a name for itself in
              the country and abroad. They have consistently excelled in the
              highly competitive industrial environment in top-ranking
              companies. It is a life-long process, especially because of steady
              and rapid advances in computing technologies shorten the life of
              tools and techniques prevalent today. Obsolescence begins when
              learning ends. Our students are given a strong foundation in
              information science and problem-solving techniques and are made
              adaptable to changes. Our objective is to empower our students
              with latest technical knowledge and skills that help them to meet
              global challenges of emerging technologies. We provide them with
              the best teaching faculty, state-of-the-art facilities, excellent
              research and development environment. We understand that tomorrow
              just academic excellence is not sufficient, we equip them with
              extracurricular, co-curricular activities to make them
              self-sustainable law obeying citizen of civilized society with
              motivation of contributing the gained knowledge, services,
              experience, towards the need society and peoples, who deserves
              most. ACM Student chapter has been walking through the very
              mission of our department by inculcating in students the thirst of
              technical creativity, knowledge and provides a platform for
              students for their all-round development by encouraging them to
              take part in various technical and non-technical activities
              organized on a regular basis throughout the year. The chapter aims
              at serving as a dynamic hub of activities for the computing
              fraternity where enthusiasts meet, interact and learn from each
              other. The chapter organizes various events which includes
              hackathons, technical workshops, talks by renowned speakers and
              coding competitions.
            </Typography>
          </div>
          <Paper style={{ borderRadius: 40 }} data-aos="fade-right">
            <img src={HOD} className={classes.imgwithContent} alt="GIT" />
          </Paper>
        </div>
      </div>
    </>
  );
}

export default HomeDesktop;
