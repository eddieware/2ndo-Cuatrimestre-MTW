using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;


namespace VistaPersonalizada2.Views
{
 
    class ColorButton : Button 
    {
        public int valor { get; set; }
        public string colorInicial { get; set; }
        public string colorProcesando { get; set; }

        public ColorButton(Context context) : base(context)
        {
            colorInicial = "#ffbf360c";
            colorProcesando = "#11bf360c";
            valor = 100000000;
            Click += OnClicked; // mAqui se agrego el metodo onclicked para que al tocar se dispare
        }
        public ColorButton(Context context, Android.Util.IAttributeSet attrs) : base(context, attrs)
        {
            colorInicial = "#ffbf360c";
            colorProcesando = "#11bf360c";
            valor = 100000000;
            Click += OnClicked;
        }

        private async void OnClicked(object sender, EventArgs e)
        {
            this.SetBackgroundColor(Android.Graphics.Color.ParseColor(colorProcesando));
            await System.Threading.Tasks.Task.Run(Tarea); this.SetBackgroundColor(Android.Graphics.Color.ParseColor(colorInicial));
        }

        private void Tarea()
        {
            int i = 0;
            while (i < valor)
                i++;
        }


        public override IParcelable OnSaveInstanceState()
        {
            IParcelable state = base.OnSaveInstanceState();
            ViewState instance = new ViewState(state)
            {
                valor = valor,
                colorInicial = colorInicial,
                colorProcesando = colorProcesando
            };
            return instance;
        }


        public override void OnRestoreInstanceState(IParcelable state)
        {

            ViewState instance = state as ViewState;
            if (instance == null)
            {
                base.OnRestoreInstanceState(state);
            }
            else
            {
                base.OnRestoreInstanceState(instance.SuperState);
                valor = instance.valor;
                colorInicial = instance.colorInicial;
                colorProcesando = instance.colorProcesando;
            }
        }


    }
}