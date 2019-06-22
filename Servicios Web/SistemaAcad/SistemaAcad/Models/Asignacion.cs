using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAcad.Models
{
    public class Asignacion
    {
        public int AsignacionID { get; set; }

        public int CursoID { get; set; }

        public int instructorID { get; set; }   

        public DateTime HoraCurso { get; set; }
}
}
