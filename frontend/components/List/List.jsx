import React, { useEffect, useState } from "react";

function List({ payload }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fetchingSiwa = async () => {
    const respRapot = await fetch(
      `http://localhost:3001/api/rapot/?mapel=${payload.mapel}`,
      {
        method: "GET",
      }
    );
    const { data: rapot } = await respRapot.json();
    const resp = await fetch(
      `http://localhost:3001/api/siswa/?lokasi=${payload.lokasi}&kelas=${payload.kelas}`,
      {
        method: "GET",
      }
    );
    const { data: student } = await resp.json();
    let dataReal = [];
    student.forEach((dataStudent) => {
      let getDataFromRaport = rapot.find(
        (studentRapot) => studentRapot.siswa._id === dataStudent._id
      );

      if (getDataFromRaport) {
        dataStudent.namaMapel = payload.mapel;
        dataStudent.nilai = getDataFromRaport.nilai;
        dataStudent.rapotId = getDataFromRaport._id;
        dataReal.push(dataStudent);
      } else {
        dataReal.push(dataStudent);
      }
    });

    setStudents(dataReal);
  };

  useEffect(() => {
    if (payload.lokasi !== "" && payload.kelas !== "" && payload.mapel !== "") {
      fetchingSiwa();
    }
  }, [payload]);

  const handleChangeNilai = (value, index) => {
    setStudents(
      students.map((item, i) =>
        i === index ? { ...item, nilai: value, namaMapel: payload.mapel } : item
      )
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    for (const data of students) {
      if (data.nilai) {
        data.tglTest = new Date().toISOString().replace("Z", "+07:00");

        try {
          await fetch("http://localhost:3001/api/rapot", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (error) {
          console.log(error);
          break; // Menghentikan iterasi jika terjadi kesalahan
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
    setSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSuccess(false);
    setLoading(false);
  };

  return (
    <div className="mt-5">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Nilai</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {students.map((student, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{student.namaMurid}</td>
                <td>
                  <input
                    type="number"
                    placeholder="Type Score Here"
                    className="input input-bordered w-full max-w-xs"
                    value={student?.nilai ? student?.nilai : ""}
                    onChange={(e) => handleChangeNilai(e.target.value, i)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-5">
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={loading || students.length < 1}
        >
          Save
        </button>
      </div>
      {success && (
        <div className="toast toast-start">
          <div className="alert alert-success">
            <span>Success Save Data!</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
