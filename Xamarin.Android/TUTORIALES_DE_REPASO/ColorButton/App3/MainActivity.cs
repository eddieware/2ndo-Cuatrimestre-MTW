using Android.App;
using Android.OS;
using Android.Support.V7.App;
using Android.Runtime;
using Android.Widget;

namespace App3
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    { int count = 1;
        bool clicked = true;

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            Xamarin.Essentials.Platform.Init(this, savedInstanceState);
            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.activity_main);

            Button button = FindViewById<Button>(Resource.Id.EddButton);

            button.Click += delegate
            {
                if (clicked)
                { //SI CLICK ES VERDADERO PINTA ROJO EL BOTON
                    button.SetBackgroundColor(new Android.Graphics.Color(255, 55, 55));
                   
                }
                else
                {
                    button.SetBackgroundColor(new Android.Graphics.Color(55, 55, 255));
                }
               clicked = !clicked; // esta parte es para switchear ya que si no se queda en rojo siempre
            };//FIN CLICK
        }
        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }
}