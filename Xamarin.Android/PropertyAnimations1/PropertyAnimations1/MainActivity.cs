﻿using Android.App;
using Android.OS;
using Android.Support.V7.App;
using Android.Animation;
using Android.Runtime;
using Android.Widget;
using Android.Views.Animations;

namespace PropertyAnimations1
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

            Button botonAnimado = FindViewById<Button>(Resource.Id.botonAnimado);
            botonAnimado.SetWidth(300);/*
            ObjectAnimator objectAnimator = ObjectAnimator.OfInt(botonAnimado, "width", 300, 250, 300);
            objectAnimator.SetDuration(3000);
            objectAnimator.SetInterpolator(new LinearInterpolator());
            objectAnimator.RepeatCount = 100;
            objectAnimator.Start();

            //1 new

            ObjectAnimator objectAnimator1 = ObjectAnimator.OfInt(botonAnimado, "height", 120, 70, 120);
            objectAnimator1.SetDuration(3000);
            objectAnimator1.SetInterpolator(new LinearInterpolator());
            objectAnimator1.RepeatCount = 100;

            AnimatorSet ans = new Android.Animation.AnimatorSet();
            ans.PlayTogether(objectAnimator, objectAnimator1);
            ans.PlayTogether(objectAnimator1);
            ans.Start();*/

            ObjectAnimator objectAnimator2 = ObjectAnimator.OfFloat(botonAnimado, "rotationY", 0, 360);
            objectAnimator2.SetDuration(10000);
            objectAnimator2.SetInterpolator(new LinearInterpolator());
            objectAnimator2.RepeatCount = 100;
            //ins 1
            objectAnimator2.Update += (sender, e) => {
                if ((float)e.Animation.AnimatedValue >= 90 && (float)e.Animation.AnimatedValue <= 270)
                    botonAnimado.Text = "";
                else
                    botonAnimado.Text = "Boton animado";
            };
            /*
            AnimatorSet ans = new Android.Animation.AnimatorSet();
            ans.PlayTogether(objectAnimator2);

            ans.Start();*/

            //Comentado para complementaria
            /* 
            Animator animator = AnimatorInflater.LoadAnimator(this, Resource.Animator.property);
            animator.SetTarget(botonAnimado);

            animator.Start();*/








        }
        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }
}