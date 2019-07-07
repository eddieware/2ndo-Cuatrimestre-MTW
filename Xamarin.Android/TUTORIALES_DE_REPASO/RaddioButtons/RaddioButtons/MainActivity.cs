using Android.App;
using Android.OS;
using Android.Support.V7.App;
using Android.Runtime;
using Android.Widget;
using Android.Util;

namespace RaddioButtons
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            Xamarin.Essentials.Platform.Init(this, savedInstanceState);
            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.activity_main);


            var radioGroup = FindViewById<RadioGroup>(Resource.Id.radioGroup1);
            radioGroup.CheckedChange += delegate
            {
                var buttonText = FindViewById<RadioButton>(radioGroup.CheckedRadioButtonId).Text;
                Log.Debug("debug", "Button ID: " + radioGroup.CheckedRadioButtonId);

            };

           // var radioButton = FindViewById<RadioButton>(Resource.Id.radioButton1);
            //radioButton.Click += delegate
           //{
             //  Log.Debug("debug", "RadioButton1 Pushed!");
           //};

        }
        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }
}