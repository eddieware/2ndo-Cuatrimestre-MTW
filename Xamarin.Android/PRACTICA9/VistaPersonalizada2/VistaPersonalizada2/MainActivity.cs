using Android.App;
using Android.OS;
using Android.Support.V7.App;
using Android.Runtime;
using Android.Widget;
using VistaPersonalizada2.Views;



namespace VistaPersonalizada2
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            if (savedInstanceState != null)
                SupportActionBar.Title = savedInstanceState.GetString("LLAVE_GUARDADA");

            base.OnCreate(savedInstanceState);
            Xamarin.Essentials.Platform.Init(this, savedInstanceState);
            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.activity_main);
            RelativeLayout relativeLayout = FindViewById<RelativeLayout>(Resource.Id.relativeLayout);
            ColorButton myColorButton = new ColorButton(this);
            myColorButton.Text = "My Color Button";

            RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.WrapContent, RelativeLayout.LayoutParams.WrapContent);
            layoutParams.AddRule(LayoutRules.RightOf, Resource.Id.colorbutton1);
            myColorButton.LayoutParameters = layoutParams;
            relativeLayout.AddView(myColorButton);



        }
        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }

        protected override void OnSaveInstanceState(Bundle outState)
        {
            base.OnSaveInstanceState(outState);
            outState.PutString("LLAVE_GUARDADA", "Llave guardada");
        }

        protected override void OnRestoreInstanceState(Bundle savedInstanceState)
        {
            base.OnRestoreInstanceState(savedInstanceState);
            string value = savedInstanceState.GetString("LLAVE_GUARDADA");
        }// Ultimo codigo agregado



    }
}