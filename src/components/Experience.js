import "../components/style.css";
import Divider from "@material-ui/core/Divider";

export default function Experience() {
  return (
    <div className="experience">
      <h2 className="experience_title">Experience</h2>
      <div class="experience-item">
        <div class="experience-title">
          <em>Front-End Developer</em>
        </div>
        <a
          href="https://www.nfactorial.school/"
          target="_blank"
          className="experience-link"
        >
          <div class="company">nFactorial</div>
        </a>
        <div class="dates">September 2023 - Present</div>
        <div class="description">
          <p>
            I am currently undergoing training in web development. <br />
            Throughout the course, I have solidified my skills through hands-on
            practice and theoretical study.
            <br /> Additionally, I have acquired essential knowledge about key
            concepts, tools, and best practices in the field of web development.
          </p>
        </div>
      </div>
      <Divider />
      <div class="experience-item">
        <div class="experience-title">
          <em>IT Recruiter</em>
        </div>
        <a
          href="https://globerce.capital/"
          target="_blank"
          className="experience-link"
        >
          <div class="company">Globerce Capital</div>
        </a>

        <div class="dates">May 2021 - Present</div>
        <div class="description">
          <p>
            Leveraged social media platforms and online job boards to advertise
            open positions and engage with potential candidates. <br />
            Completed human resource operational requirements by scheduling and
            assigning employees. <br />
            Pre-screened resumes prior to sending to corporate hiring managers
            for consideration
          </p>
        </div>
      </div>
    </div>
  );
}
