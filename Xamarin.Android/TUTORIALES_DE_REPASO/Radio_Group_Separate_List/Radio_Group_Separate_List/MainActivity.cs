using Android.App;
using Android.OS;
using Android.Support.V7.App;
using Android.Runtime;
using Android.Widget;

namespace Radio_Group_Separate_List
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    {
        Spinner spinner;
        RadioGroup radioGroup;
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            Xamarin.Essentials.Platform.Init(this, savedInstanceState);
            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.activity_main);

            spinner = FindViewById<Spinner>(Resource.Id.spinner1);
            radioGroup = FindViewById<RadioGroup>(Resource.Id.radioGroup1);

            var toggleButton = FindViewById<ToggleButton>(Resource.Id.toggleButton1);
            var layout = FindViewById<LinearLayout>(Resource.Id.linearLayout1);

            toggleButton.CheckedChange += delegate
            {
                if (toggleButton.Checked)
                    layout.Visibility = Android.Views.ViewStates.Visible;
                else
                    layout.Visibility = Android.Views.ViewStates.Gone;
            };
            radioGroup.CheckedChange += delegate
            {
                ChangeList();
            };
        }
        void ChangeList()
        {
            var checkedId = radioGroup.CheckedRadioButtonId;

            ArrayAdapter adapter;

            if (checkedId == Resource.Id.radioButtonItalian)
            {
                adapter = ArrayAdapter.CreateFromResource(
                    this,
                    Resource.Array.italian,
                    Android.Resource.Layout.SimpleSpinnerItem);
            }
            else
            {
                adapter = ArrayAdapter.CreateFromResource(
                    this,
                    Resource.Array.french,
                    Android.Resource.Layout.SimpleSpinnerItem);
            }

            adapter.SetDropDownViewResource(Android.Resource.Layout.SimpleSpinnerDropDownItem);
            spinner.Adapter = adapter;
        }
        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }
}