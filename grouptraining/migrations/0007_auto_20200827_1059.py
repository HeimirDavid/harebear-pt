# Generated by Django 3.1 on 2020-08-27 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grouptraining', '0006_auto_20200827_1049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grouptraining',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
