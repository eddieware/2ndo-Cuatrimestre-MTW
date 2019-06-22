using SistemaAcad.Models;
using SistemaAcad.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAcad.Data
{
    public class DbInitializer
    {
        public static void Initialize (SistemaAcadContext context)
        {
            context.Database.EnsureCreated();

            if(context.Categoria.Any())
            {
                return;
            }
            var categorias = new Categoria[]
            {
                new Categoria{Nombre="Programacion",Descripcion="Curso de programacion ASP", Estado=true},
                new Categoria{Nombre="Diseño Grafico",Descripcion="Curso de diseño gráfico", Estado=true},
                new Categoria{Nombre="Matematicas",Descripcion="Algebra Lineal", Estado=true}

            };
            foreach (Categoria c in categorias)
            {
                context.Categoria.Add(c);
            }
            context.SaveChanges();

        }

    }
}
