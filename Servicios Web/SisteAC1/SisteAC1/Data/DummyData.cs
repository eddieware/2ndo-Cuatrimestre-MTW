using Microsoft.AspNetCore.Identity;
using SisteAC1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SisteAC1.Data
{
    public class DummyData
    {

        public static async Task Initialize(ApplicationDbContext context,
        UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager)
        {
            context.Database.EnsureCreated();
            String adminId1 = "";
            String adminId2 = "";
            string role1 = "Admin";
            string desc1 = "Este es el rol de Administrador";
            string role2 = "Rol de usuario";
            string desc2 = "Este es el rol de usuario";
            string password = "P@ssw0rd";

            if (await roleManager.FindByNameAsync(role1) == null)
            {
                await roleManager.CreateAsync(new ApplicationRole(role1, desc1,
                DateTime.Now));
            }
            if (await roleManager.FindByNameAsync(role2) == null)
            {
                await roleManager.CreateAsync(new ApplicationRole(role2, desc2,
                DateTime.Now));
            }
            if (await userManager.FindByNameAsync("aa@aa.aa") == null)
            {
                var user = new ApplicationUser
                {
                    UserName = "aa@aa.aa",
                    Email = "aa@aa.aa",
                    FirstName = "Familia",
                    MiddleName = "Locos",
                    LastName = "Adams",
                    Street = "Las Palmas 100",
                    City = "Valle",
                    Province = "Guanajuato",
                    PostalCode = "38400",
                    PhoneNumber = "4561141329"
                };

                var result = await userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, password);
                    await userManager.AddToRoleAsync(user, role1);
                }
                adminId1 = user.Id;
            }
            if (await userManager.FindByNameAsync("bb@bb.bb") == null)
            {
                var user = new ApplicationUser
                {
                    UserName = "bb@bb.bb",
                    Email = "bb@bb.bb",
                    FirstName = "Los",
                    MiddleName = "Simpson",
                    LastName = "Fox",
                    Street = "SiempreViva 64",
                    City = "Spriendfield",
                    Province = "Guanajuato",
                    PostalCode = "38643",
                    PhoneNumber = "1234567890"
                };

                var result = await userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, password);
                    await userManager.AddToRoleAsync(user, role1);
                }
                adminId2 = user.Id;
            }
            if (await userManager.FindByNameAsync("mm@mm.mm") == null)
            {
                var user = new ApplicationUser
                {
                    UserName = "mm@mm.mm",
                    Email = "mm@mm.mm",
                    FirstName = "Mike",
                    MiddleName = "Super",
                    LastName = "Myers",
                    Street = "Yew St",
                    City = "Vancouver",
                    Province = "BC",
                    PostalCode = "96385",
                    PhoneNumber = "6572136821"
                };


                var result = await userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, password);
                    await userManager.AddToRoleAsync(user, role2);
                }
            }
            if (await userManager.FindByNameAsync("dd@dd.dd") == null)
            {
                var user = new ApplicationUser
                {
                    UserName = "dd@dd.dd",
                    Email = "dd@dd.dd",
                    FirstName = "Donald",
                    MiddleName = "Pato",
                    LastName = "Duck",
                    Street = "Well St",
                    City = "Vancouver",
                    Province = "BC",
                    PostalCode = "52820",
                    PhoneNumber = "6041234567"
                };

                var result = await userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, password);
                    await userManager.AddToRoleAsync(user, role2);
                }
            }
        }
    }
}


      
