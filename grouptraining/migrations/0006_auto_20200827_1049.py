# Generated by Django 3.1 on 2020-08-27 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grouptraining', '0005_auto_20200827_1006'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grouptraining',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='img/'),
        ),
    ]
