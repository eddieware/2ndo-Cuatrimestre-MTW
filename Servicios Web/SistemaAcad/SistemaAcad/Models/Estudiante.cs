using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAcad.Models
{
    public class Estudiante
    {
        public int EstudianteID { get; set; }
        [StringLength(20, MinimumLength = 20, ErrorMessage = "eL NOMBRE DEBE TENER DE 3 A 50 LETRAS")]
        public string Codigo { get; set; }
    }
}
