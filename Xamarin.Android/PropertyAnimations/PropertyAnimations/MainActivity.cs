﻿using Android.App;
using Android.OS;
using Android.Support.V7.App;
using Android.Runtime;
using Android.Widget;
using Android.Animation;
using Android.Views.Animations;

namespace PropertyAnimations
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
            


            Button botonAnimado = FindViewById<Button>(Resource.Id.botonanimado);
            botonAnimado.SetWidth(300);
            ObjectAnimator objectAnimator = ObjectAnimator.OfInt(botonAnimado, "width", 300, 250, 300);
            objectAnimator.SetDuration(3000);
            objectAnimator.SetInterpolator(new LinearInterpolator());
            objectAnimator.RepeatCount = 100;
            objectAnimator.Start();
        }
        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }
}