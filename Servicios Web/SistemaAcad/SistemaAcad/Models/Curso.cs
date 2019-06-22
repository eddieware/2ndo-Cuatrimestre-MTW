using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAcad.Models
{
    public class Curso
    {
        
        [StringLength(256, MinimumLength = 3, ErrorMessage = "eL NOMBRE DEBE TENER DE 256 LETRAS MAXIMO")]
        public string Nombre { get; set; }

        public int CategoriaID { get; set; }


        [StringLength(512, MinimumLength = 20, ErrorMessage = "eL NOMBRE DEBE TENER DE 256 LETRAS MAXIMO")]
        public string Descripcion { get; set; }
        public int Creditos { get; set; }

        public int Horas { get; set; }

    }
}

