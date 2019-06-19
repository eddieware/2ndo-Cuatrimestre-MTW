using Android.App;
using Android.OS;
using Android.Support.V7.App;
using Android.Runtime;
using Android.Widget;

namespace Practice1ClickEvent
{
    [Activity(Label = "@string/app_name", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    {
        int count = 1;
        protected override void OnCreate(Bundle savedInstanceState)// ON CREATHE METHOD
        {
            base.OnCreate(savedInstanceState);
            //Xamarin.Essentials.Platform.Init(this, savedInstanceState);
            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.activity_main);

            Button button = FindViewById<Button>(Resource.Id.eddiebutton);

            button.Click += delegate { button.Text = string.Format("{0} clicks!", count++); };

        }
    }
}