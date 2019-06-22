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
        [Required(ErrorMessage = "El nombre debe tener de 3 a 50 letras")]
        [StringLength(50,MinimumLength=3,ErrorMessage = "eL NOMBRE DEBE TENER DE 3 A 50 LETRAS")]

        public string Nombre { get; set; }
        [StringLength(256, MinimumLength = 3, ErrorMessage = "eL NOMBRE DEBE TENER DE 256 LETRAS MAXIMO")]
        [Display(Name ="descripcion")]
        public string Descripcion { get; set; }

        public Boolean Estado { get; set; }
    }
}
