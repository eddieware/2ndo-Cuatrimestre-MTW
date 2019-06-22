using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAcad.Models
{
    public class Persona
    {
        public int PersonaID { get; set; }

        [StringLength(30, MinimumLength = 2, ErrorMessage = "eL NOMBRE DEBE TENER DE 3 A 50 LETRAS")]
        public int Apellidos { get; set; }

        [StringLength(20, MinimumLength = 2, ErrorMessage = "eL NOMBRE DEBE TENER DE 3 A 50 LETRAS")]
        public int Nombre { get; set; }

        public DateTime FechaNacimiento { get; set; }

        [StringLength(15, MinimumLength = 2, ErrorMessage = "eL NOMBRE DEBE TENER DE 3 A 50 LETRAS")]
        public int Documento { get; set; }

        [StringLength(50, MinimumLength = 2, ErrorMessage = "eL NOMBRE DEBE TENER DE 3 A 50 LETRAS")]
        public int Email { get; set; }

        [StringLength(15, MinimumLength = 2, ErrorMessage = "eL NOMBRE DEBE TENER DE 3 A 50 LETRAS")]
        public int Telefono { get; set; }

        [StringLength(100, MinimumLength = 2, ErrorMessage = "eL NOMBRE DEBE TENER DE 3 A 50 LETRAS")]
        public int Direccion { get; set; }

        public bool Estado { get; set; }

    }
}
