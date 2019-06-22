using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAcad.Models
{
    public enum GRADOENUM
    {
        primero,segundo, tercero
    }
    public class Inscripcion
    {
        public int GRADOENUM { get; set; }
        public int InscripcionID { get; set; }

        //GRADO ENUM

        public int CursoID { get; set; }

        public DateTime Fecha { get; set; }

        

        [Range(typeof(decimal), "6", "2")]
        public double Decimal { get; set; }


    }
}
