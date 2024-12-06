
function Skills() {
  const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Tailwind', 'TypeScript'];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
