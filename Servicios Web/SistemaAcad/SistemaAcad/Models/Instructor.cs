using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAcad.Models
{
    public class Instructor
    {
        public int InstructorID { get; set; }

        [StringLength(20, MinimumLength = 10, ErrorMessage = "eL NOMBRE DEBE TENER DE 20 LETRAS MAXIMO")]
        public string Especialidad { get; set; }

    }
}
