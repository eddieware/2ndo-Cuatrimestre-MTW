using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAcad.Models
{
    public class Categoria
    {
        public int CategoriaID { get; set; }
        [Required(ErrorMessage = "Obligatorio")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "El nombre debe tener de 3 a 50 letras")]
        public string Nombre { get; set; }
        [StringLength(256, ErrorMessage = "Máximo 256 letras")]
        [Display(Name = "Descripcion")]
        public string Descripcion { get; set; }
        public Boolean Estado { get; set; }

        //TOADD CARRERA
        //[Required(ErrorMessage = "Obligatorio")]
        [StringLength(30, ErrorMessage = "Máximo 30 letras")]
        [Display(Name = "Carrera")]
        public string Carrera { get; set; }


    }

}
