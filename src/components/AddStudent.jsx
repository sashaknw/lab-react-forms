import { useState } from "react";

function AddStudent({ handleAddStudent}) {
    const [state, setState] = useState({
        studentName: '',
        studentImage: '',
        studentPhone: '',
        studentEmail: '',
        studentProgram: '',
        studentGraduationYear: 0,
        studentGraduated: false,
      })
      const handleChange = (e) => {
        const { name, value, type, checked} = e.target;
        setState(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }))
      }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
          fullName: state.studentName,
          image: state.studentImage,
          phone: state.studentPhone,
          email: state.studentEmail,
          program: state.studentProgram,
          graduationYear: state.studentGraduationYear,
          graduated: state.studentGraduated,
        };
        handleAddStudent(newStudent);

          setState({
      studentName: '',
      studentImage: '',
      studentPhone: '',
      studentEmail: '',
      studentProgram: '',
      studentGraduationYear: 0,
      studentGraduated: false,
    });
  };
        
    
      return (
        <form onSubmit={handleFormSubmit}>
          <span>Add a Student</span>
          <div>
            <label>
              Full Name
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={state.studentName}
                onChange={handleChange}
              />
            </label>

            <label>
              Profile Image
              <input
                name="image"
                type="url"
                placeholder="Profile Image"
                value={state.studentImage}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={state.studentPhone}
                onChange={handleChange}
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={state.studentEmail}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Program
              <select
                name="program"
                value={state.studentProgram}
                onChange={handleChange}
              >
                <option value="">-- None --</option>
                <option value="Web Dev">Web Dev</option>
                <option value="UXUI">UXUI</option>
                <option value="Data">Data</option>
              </select>
            </label>

            <label>
              Graduation Year
              <input
                name="graduationYear"
                type="number"
                placeholder="Graduation Year"
                minLength={4}
                maxLength={4}
                min={2023}
                max={2030}
                value={state.studentGraduationYear}
                onChange={handleChange}
              />
            </label>

            <label>
              Graduated
              <input
                name="graduated"
                type="checkbox"
                checked={state.studentGraduated}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Add Student</button>
          </div>
        </form>
      );
}

export default AddStudent;